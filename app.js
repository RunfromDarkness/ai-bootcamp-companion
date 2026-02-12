// ===== AI BOOTCAMP COMPANION - MAIN APPLICATION =====
// Retention-first learning tracker for AI education

// ===== STATE MANAGEMENT =====
class BootcampState {
    constructor() {
        this.currentWeek = 1;
        this.currentDay = 1;
        this.currentBlock = 1;
        this.completedBlocks = this.loadCompletedBlocks();
        this.recallAttempts = this.loadRecallAttempts();
        this.glossaryProgress = this.loadGlossaryProgress();
        this.projects = this.loadProjects();
        this.promptLibrary = this.loadPromptLibrary();
    }

    // Load from localStorage
    loadCompletedBlocks() {
        const saved = localStorage.getItem('completedBlocks');
        return saved ? JSON.parse(saved) : {};
    }

    loadRecallAttempts() {
        const saved = localStorage.getItem('recallAttempts');
        return saved ? JSON.parse(saved) : [];
    }

    loadGlossaryProgress() {
        const saved = localStorage.getItem('glossaryProgress');
        return saved ? JSON.parse(saved) : {};
    }

    loadProjects() {
        const saved = localStorage.getItem('projects');
        return saved ? JSON.parse(saved) : [];
    }

    loadPromptLibrary() {
        const saved = localStorage.getItem('promptLibrary');
        return saved ? JSON.parse(saved) : [];
    }

    // Save to localStorage
    saveCompletedBlocks() {
        localStorage.setItem('completedBlocks', JSON.stringify(this.completedBlocks));
    }

    saveRecallAttempts() {
        localStorage.setItem('recallAttempts', JSON.stringify(this.recallAttempts));
    }

    saveGlossaryProgress() {
        localStorage.setItem('glossaryProgress', JSON.stringify(this.glossaryProgress));
    }

    saveProjects() {
        localStorage.setItem('projects', JSON.stringify(this.projects));
    }

    savePromptLibrary() {
        localStorage.setItem('promptLibrary', JSON.stringify(this.promptLibrary));
    }

    // Mark a block as complete
    markBlockComplete(week, day, blockId) {
        const key = `w${week}d${day}b${blockId}`;
        this.completedBlocks[key] = {
            completed: true,
            timestamp: new Date().toISOString()
        };
        this.saveCompletedBlocks();
        this.advanceProgress(week, day, blockId);
    }

    // Check if a block is complete
    isBlockComplete(week, day, blockId) {
        const key = `w${week}d${day}b${blockId}`;
        return this.completedBlocks[key]?.completed || false;
    }

    // Advance to next block/day automatically
    advanceProgress(week, day, blockId) {
        if (blockId < 4) {
            this.currentBlock = blockId + 1;
        } else if (day < 7) {
            this.currentDay = day + 1;
            this.currentBlock = 1;
        } else {
            // Week complete
            this.currentWeek = week + 1;
            this.currentDay = 1;
            this.currentBlock = 1;
        }
        this.saveCurrentPosition();
    }

    saveCurrentPosition() {
        localStorage.setItem('currentWeek', this.currentWeek);
        localStorage.setItem('currentDay', this.currentDay);
        localStorage.setItem('currentBlock', this.currentBlock);
    }

    loadCurrentPosition() {
        this.currentWeek = parseInt(localStorage.getItem('currentWeek')) || 1;
        this.currentDay = parseInt(localStorage.getItem('currentDay')) || 1;
        this.currentBlock = parseInt(localStorage.getItem('currentBlock')) || 1;
    }

    // Add a recall attempt
    addRecallAttempt(concept, yourAnswer, correctAnswer, confidence, score) {
        this.recallAttempts.push({
            concept,
            yourAnswer,
            correctAnswer,
            confidence,
            score,
            timestamp: new Date().toISOString(),
            day: this.currentDay
        });
        this.saveRecallAttempts();
    }

    // Update glossary progress
    updateGlossaryProgress(term, mastery) {
        this.glossaryProgress[term] = {
            mastery,
            lastReviewed: new Date().toISOString(),
            reviewCount: (this.glossaryProgress[term]?.reviewCount || 0) + 1
        };
        this.saveGlossaryProgress();
    }

    // Add a project
    addProject(name, content, day) {
        this.projects.push({
            name,
            content,
            day,
            timestamp: new Date().toISOString()
        });
        this.saveProjects();
    }

    // Add to prompt library
    addPrompt(category, prompt, notes) {
        this.promptLibrary.push({
            category,
            prompt,
            notes,
            timestamp: new Date().toISOString()
        });
        this.savePromptLibrary();
    }

    // Get completion stats
    getStats() {
        const totalBlocks = 7 * 4; // 7 days × 4 blocks
        const completedCount = Object.keys(this.completedBlocks).length;
        const completionRate = Math.round((completedCount / totalBlocks) * 100);
        
        return {
            totalBlocks,
            completedCount,
            completionRate,
            currentWeek: this.currentWeek,
            currentDay: this.currentDay,
            currentBlock: this.currentBlock,
            recallAttempts: this.recallAttempts.length,
            projectsCompleted: this.projects.length,
            promptsSaved: this.promptLibrary.length,
            glossaryTermsReviewed: Object.keys(this.glossaryProgress).length
        };
    }

    // Reset all data
    reset() {
        if (confirm('⚠️ This will delete ALL your progress. Are you absolutely sure?')) {
            if (confirm('Really sure? This cannot be undone!')) {
                localStorage.clear();
                location.reload();
            }
        }
    }
}

// ===== INITIALIZE STATE =====
const state = new BootcampState();
state.loadCurrentPosition();

// ===== VIEW RENDERER =====
class ViewRenderer {
    constructor(state) {
        this.state = state;
        this.contentArea = document.getElementById('app-content');
    }

    render(viewName) {
        switch(viewName) {
            case 'dashboard':
                this.renderDashboard();
                break;
            case 'daily':
                this.renderDailyMission();
                break;
            case 'recall':
                this.renderRecallDrill();
                break;
            case 'glossary':
                this.renderGlossary();
                break;
            case 'progress':
                this.renderProgress();
                break;
            default:
                this.renderDashboard();
        }
        this.updateFooter();
    }

    renderDashboard() {
        const stats = this.state.getStats();
        
        this.contentArea.innerHTML = `
            <div class="view">
                <div class="card">
                    <h2>🎯 Mission Status</h2>
                    <p>Welcome back, Sergeant! Here's your current training status.</p>
                </div>

                <div class="stats-grid">
                    <div class="stat-box">
                        <span class="number">${stats.completionRate}%</span>
                        <span class="label">Week 1 Complete</span>
                    </div>
                    <div class="stat-box">
                        <span class="number">${stats.completedCount}</span>
                        <span class="label">Blocks Done</span>
                    </div>
                    <div class="stat-box">
                        <span class="number">${stats.recallAttempts}</span>
                        <span class="label">Recall Drills</span>
                    </div>
                    <div class="stat-box">
                        <span class="number">${stats.projectsCompleted}</span>
                        <span class="label">Projects</span>
                    </div>
                </div>

                <div class="card">
                    <h3>📍 Current Position</h3>
                    <p style="font-size: 1.1rem; margin-top: 0.5rem;">
                        <strong>Week ${stats.currentWeek}, Day ${stats.currentDay}, Block ${stats.currentBlock}</strong>
                    </p>
                    <p style="margin-top: 1rem; color: var(--gray);">
                        ${this.getCurrentDayTitle()}
                    </p>
                    <button class="btn btn-primary mt-1" onclick="app.showView('daily')">
                        Go to Today's Mission →
                    </button>
                </div>

                <div class="card">
                    <h3>🎖️ Quick Actions</h3>
                    <div style="display: grid; gap: 0.75rem; margin-top: 1rem;">
                        <button class="btn btn-secondary" onclick="app.showView('recall')">
                            Start Recall Drill
                        </button>
                        <button class="btn btn-secondary" onclick="app.showView('glossary')">
                            Review Glossary
                        </button>
                        <button class="btn btn-secondary" onclick="app.showView('progress')">
                            View Detailed Progress
                        </button>
                    </div>
                </div>

                ${stats.completedCount === 0 ? `
                    <div class="alert alert-info">
                        <strong>🚀 Ready to begin?</strong><br>
                        Start with Day 1, Block 1: "What is AI, really?" Click "Today's Mission" to begin your journey.
                    </div>
                ` : ''}
            </div>
        `;
    }

    renderDailyMission() {
        const day = this.state.currentDay;
        const dayData = CURRICULUM.week1[`day${day}`];
        
        if (!dayData) {
            this.contentArea.innerHTML = `
                <div class="card">
                    <h2>🎉 Week 1 Complete!</h2>
                    <p>Outstanding work, Sergeant! You've completed all 7 days of AI Bootcamp Week 1.</p>
                    <p style="margin-top: 1rem;">Week 2 curriculum coming soon...</p>
                    <button class="btn btn-primary" onclick="app.showView('progress')">
                        View Your Progress
                    </button>
                </div>
            `;
            return;
        }

        const blocksHTML = dayData.blocks.map(block => {
            const isComplete = this.state.isBlockComplete(1, day, block.id);
            const isCurrent = block.id === this.state.currentBlock;
            
            return `
                <div class="block ${isComplete ? 'completed' : ''} ${isCurrent ? 'in-progress' : ''}">
                    <div class="block-header">
                        <span class="block-title">${block.title}</span>
                        <span class="block-status">
                            ${isComplete ? '✅ Complete' : isCurrent ? '🔄 Current' : '⏸️ Pending'}
                        </span>
                    </div>
                    <div class="block-content">
                        ${this.formatBlockContent(block.content)}
                        ${block.tasks ? `
                            <h4 style="margin-top: 1rem; color: var(--army-green);">Tasks:</h4>
                            <ul>
                                ${block.tasks.map(task => `<li>${task}</li>`).join('')}
                            </ul>
                        ` : ''}
                    </div>
                    ${!isComplete ? `
                        <button class="btn btn-primary" onclick="app.completeBlock(${day}, ${block.id}, '${block.type}')">
                            ${isCurrent ? 'Complete This Block' : 'Start This Block'}
                        </button>
                    ` : ''}
                </div>
            `;
        }).join('');

        this.contentArea.innerHTML = `
            <div class="view">
                <div class="card">
                    <h2>📅 Day ${day}: ${dayData.title}</h2>
                    <p style="color: var(--gray); margin-top: 0.5rem;">
                        Complete all 4 blocks to advance to the next day. Take your time—retention matters more than speed.
                    </p>
                </div>

                <div class="blocks-container">
                    ${blocksHTML}
                </div>

                <div class="card" style="margin-top: 2rem;">
                    <h3>💡 Training Tips</h3>
                    <ul style="margin-left: 1.5rem; color: var(--gray);">
                        <li>Work through blocks in order for maximum retention</li>
                        <li>Take breaks between blocks if needed</li>
                        <li>Write things down in your own words</li>
                        <li>Use your AI assistant actively—this is hands-on training</li>
                    </ul>
                </div>
            </div>
        `;
    }

    renderRecallDrill() {
        // Get some random terms to quiz on
        const reviewedTerms = Object.keys(this.state.glossaryProgress);
        const availableTerms = reviewedTerms.length > 0 
            ? GLOSSARY_TERMS.filter(t => reviewedTerms.includes(t.term))
            : GLOSSARY_TERMS.slice(0, 5); // First 5 if nothing reviewed yet

        if (availableTerms.length === 0) {
            this.contentArea.innerHTML = `
                <div class="card">
                    <h2>📚 Recall Drill</h2>
                    <p>You haven't reviewed any glossary terms yet! Start by visiting the Glossary tab.</p>
                    <button class="btn btn-primary" onclick="app.showView('glossary')">
                        Go to Glossary
                    </button>
                </div>
            `;
            return;
        }

        // Pick a random term
        const term = availableTerms[Math.floor(Math.random() * availableTerms.length)];

        this.contentArea.innerHTML = `
            <div class="view">
                <div class="card">
                    <h2>🧠 Recall Drill</h2>
                    <p style="color: var(--gray);">Test your memory. Write what you remember, then rate your confidence and accuracy.</p>
                </div>

                <div class="card">
                    <h3 style="color: var(--army-green); font-size: 1.5rem;">Define: ${term.term}</h3>
                    
                    <div class="form-group" style="margin-top: 1.5rem;">
                        <label>Your Answer (from memory, no peeking!):</label>
                        <textarea id="recall-answer" placeholder="Write your explanation here..."></textarea>
                    </div>

                    <div class="form-group">
                        <label>Confidence Level (1=Guessing, 5=Very Sure):</label>
                        <div class="rating-group">
                            <button class="rating-btn" data-rating="1">1</button>
                            <button class="rating-btn" data-rating="2">2</button>
                            <button class="rating-btn" data-rating="3">3</button>
                            <button class="rating-btn" data-rating="4">4</button>
                            <button class="rating-btn" data-rating="5">5</button>
                        </div>
                    </div>

                    <button class="btn btn-primary" onclick="app.submitRecall('${term.term}', \`${term.definition}\`, \`${term.example}\`)">
                        Check My Answer
                    </button>
                </div>

                <div class="card">
                    <h3>💪 Recent Recall Performance</h3>
                    ${this.renderRecentRecalls()}
                </div>
            </div>
        `;

        // Add click handlers for rating buttons
        document.querySelectorAll('.rating-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.rating-btn').forEach(b => b.classList.remove('selected'));
                this.classList.add('selected');
            });
        });
    }

    renderGlossary() {
        const termsHTML = GLOSSARY_TERMS.map(term => {
            const progress = this.state.glossaryProgress[term.term];
            const mastery = progress?.mastery || 0;
            const reviewCount = progress?.reviewCount || 0;

            return `
                <div class="glossary-term">
                    <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 0.5rem;">
                        <strong>${term.term}</strong>
                        <span style="font-size: 0.85rem; color: var(--gray);">
                            ${reviewCount > 0 ? `Reviewed ${reviewCount}x` : 'Not reviewed'}
                        </span>
                    </div>
                    <p>${term.definition}</p>
                    <p style="font-style: italic; color: var(--olive-drab); margin-top: 0.5rem;">
                        Example: ${term.example}
                    </p>
                    <div style="margin-top: 1rem;">
                        <label style="font-size: 0.9rem; font-weight: 600; display: block; margin-bottom: 0.5rem;">
                            How well do you know this? (1=Just learning, 5=Can teach it)
                        </label>
                        <div class="rating-group">
                            ${[1,2,3,4,5].map(rating => `
                                <button class="rating-btn ${mastery === rating ? 'selected' : ''}" 
                                        onclick="app.rateTerm('${term.term}', ${rating})">
                                    ${rating}
                                </button>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        this.contentArea.innerHTML = `
            <div class="view">
                <div class="card">
                    <h2>📖 AI Glossary</h2>
                    <p>Core terms you'll master during Week 1. Rate your understanding to track progress.</p>
                    
                    <div class="progress-bar-container" style="margin-top: 1.5rem;">
                        <div class="progress-label">
                            <span>Glossary Mastery</span>
                            <span>${this.calculateGlossaryMastery()}%</span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${this.calculateGlossaryMastery()}%">
                                ${this.calculateGlossaryMastery()}%
                            </div>
                        </div>
                    </div>
                </div>

                <div class="glossary-list">
                    ${termsHTML}
                </div>
            </div>
        `;
    }

    renderProgress() {
        const stats = this.state.getStats();
        const completionByDay = this.getCompletionByDay();

        this.contentArea.innerHTML = `
            <div class="view">
                <div class="card">
                    <h2>📊 Progress Report</h2>
                    <p>Your complete training overview</p>
                </div>

                <div class="card">
                    <h3>🎯 Overall Progress</h3>
                    <div class="progress-bar-container">
                        <div class="progress-label">
                            <span>Week 1 Completion</span>
                            <span>${stats.completionRate}%</span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${stats.completionRate}%">
                                ${stats.completionRate}%
                            </div>
                        </div>
                    </div>
                    <p style="margin-top: 1rem; color: var(--gray);">
                        ${stats.completedCount} of ${stats.totalBlocks} blocks completed
                    </p>
                </div>

                <div class="card">
                    <h3>📅 Daily Breakdown</h3>
                    ${this.renderDailyProgress(completionByDay)}
                </div>

                <div class="stats-grid">
                    <div class="stat-box">
                        <span class="number">${stats.recallAttempts}</span>
                        <span class="label">Recall Drills</span>
                    </div>
                    <div class="stat-box">
                        <span class="number">${stats.projectsCompleted}</span>
                        <span class="label">Projects</span>
                    </div>
                    <div class="stat-box">
                        <span class="number">${stats.glossaryTermsReviewed}</span>
                        <span class="label">Terms Reviewed</span>
                    </div>
                    <div class="stat-box">
                        <span class="number">${stats.promptsSaved}</span>
                        <span class="label">Prompts Saved</span>
                    </div>
                </div>

                <div class="card">
                    <h3>🧠 Recall Performance</h3>
                    ${this.renderRecallStats()}
                </div>

                <div class="card">
                    <h3>🗂️ Your Projects</h3>
                    ${this.renderProjectsList()}
                </div>
            </div>
        `;
    }

    // Helper methods
    formatBlockContent(content) {
        return content.split('\n').map(line => {
            line = line.trim();
            if (line.startsWith('•')) {
                return `<li>${line.substring(1).trim()}</li>`;
            } else if (line === '') {
                return '<br>';
            } else {
                return `<p>${line}</p>`;
            }
        }).join('');
    }

    getCurrentDayTitle() {
        const dayData = CURRICULUM.week1[`day${this.state.currentDay}`];
        return dayData ? dayData.title : 'Congratulations! Week 1 Complete';
    }

    calculateGlossaryMastery() {
        const progress = this.state.glossaryProgress;
        const reviewed = Object.values(progress);
        if (reviewed.length === 0) return 0;
        
        const avgMastery = reviewed.reduce((sum, p) => sum + p.mastery, 0) / reviewed.length;
        return Math.round((avgMastery / 5) * 100);
    }

    getCompletionByDay() {
        const completion = {};
        for (let day = 1; day <= 7; day++) {
            let completed = 0;
            for (let block = 1; block <= 4; block++) {
                if (this.state.isBlockComplete(1, day, block)) {
                    completed++;
                }
            }
            completion[day] = completed;
        }
        return completion;
    }

    renderDailyProgress(completionByDay) {
        let html = '<div style="display: grid; gap: 0.75rem;">';
        for (let day = 1; day <= 7; day++) {
            const completed = completionByDay[day];
            const percentage = (completed / 4) * 100;
            const dayData = CURRICULUM.week1[`day${day}`];
            
            html += `
                <div style="background: var(--white); padding: 1rem; border-radius: 4px; border-left: 3px solid ${completed === 4 ? 'var(--success)' : 'var(--tan)'};">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                        <strong>Day ${day}: ${dayData.title}</strong>
                        <span style="color: var(--gray);">${completed}/4 blocks</span>
                    </div>
                    <div class="progress-bar" style="height: 8px;">
                        <div class="progress-fill" style="width: ${percentage}%; font-size: 0;"></div>
                    </div>
                </div>
            `;
        }
        html += '</div>';
        return html;
    }

    renderRecallStats() {
        const attempts = this.state.recallAttempts;
        if (attempts.length === 0) {
            return '<p style="color: var(--gray);">No recall drills completed yet. Start one from the Recall Drill tab!</p>';
        }

        const avgConfidence = (attempts.reduce((sum, a) => sum + a.confidence, 0) / attempts.length).toFixed(1);
        const avgScore = (attempts.reduce((sum, a) => sum + a.score, 0) / attempts.length).toFixed(1);

        return `
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
                <div style="text-align: center; padding: 1rem; background: var(--sand); border-radius: 4px;">
                    <div style="font-size: 2rem; font-weight: 700; color: var(--army-green);">${avgConfidence}</div>
                    <div style="font-size: 0.9rem; color: var(--gray);">Avg Confidence</div>
                </div>
                <div style="text-align: center; padding: 1rem; background: var(--sand); border-radius: 4px;">
                    <div style="font-size: 2rem; font-weight: 700; color: var(--army-green);">${avgScore}</div>
                    <div style="font-size: 0.9rem; color: var(--gray);">Avg Accuracy</div>
                </div>
            </div>
            <p style="color: var(--gray); font-size: 0.9rem;">Based on ${attempts.length} recall attempt${attempts.length !== 1 ? 's' : ''}</p>
        `;
    }

    renderProjectsList() {
        const projects = this.state.projects;
        if (projects.length === 0) {
            return '<p style="color: var(--gray);">No projects saved yet. Complete Block 3 exercises to start building your portfolio!</p>';
        }

        return `
            <div style="display: grid; gap: 0.75rem;">
                ${projects.map(p => `
                    <div style="background: var(--sand); padding: 1rem; border-radius: 4px; border-left: 3px solid var(--army-green);">
                        <strong>${p.name}</strong>
                        <div style="color: var(--gray); font-size: 0.85rem; margin-top: 0.25rem;">
                            Day ${p.day} • ${new Date(p.timestamp).toLocaleDateString()}
                        </div>
                        <p style="margin-top: 0.5rem; font-size: 0.9rem; color: var(--gray);">
                            ${p.content.substring(0, 150)}${p.content.length > 150 ? '...' : ''}
                        </p>
                    </div>
                `).join('')}
            </div>
        `;
    }

    renderRecentRecalls() {
        const recent = this.state.recallAttempts.slice(-5).reverse();
        if (recent.length === 0) {
            return '<p style="color: var(--gray);">No recall attempts yet. Complete your first drill above!</p>';
        }

        return `
            <div style="display: grid; gap: 0.5rem; font-size: 0.9rem;">
                ${recent.map(r => `
                    <div style="display: flex; justify-content: space-between; padding: 0.5rem; background: var(--sand); border-radius: 4px;">
                        <span>${r.concept}</span>
                        <span>
                            Confidence: ${r.confidence}/5 | 
                            Score: ${r.score}/5
                        </span>
                    </div>
                `).join('')}
            </div>
        `;
    }

    updateFooter() {
        document.getElementById('current-week').textContent = this.state.currentWeek;
        document.getElementById('current-day').textContent = this.state.currentDay;
        document.getElementById('current-block').textContent = this.state.currentBlock;
    }
}

// ===== APPLICATION CONTROLLER =====
class BootcampApp {
    constructor() {
        this.state = state;
        this.renderer = new ViewRenderer(this.state);
        this.init();
    }

    init() {
        // Set up navigation
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.showView(e.target.dataset.view);
            });
        });

        // Set up reset button
        document.getElementById('reset-btn').addEventListener('click', () => {
            this.state.reset();
        });

        // Render initial view
        this.showView('dashboard');
    }

    showView(viewName) {
        this.renderer.render(viewName);
    }

    completeBlock(day, blockId, blockType) {
        // Depending on block type, show appropriate completion modal
        if (blockType === 'recall') {
            this.showRecallCompletion(day, blockId);
        } else if (blockType === 'project') {
            this.showProjectCompletion(day, blockId);
        } else {
            this.showStandardCompletion(day, blockId);
        }
    }

    showStandardCompletion(day, blockId) {
        const userConfirm = confirm('Have you completed all tasks for this block?\n\n• Completed all readings/activities\n• Took notes in your own words\n• Ready to move forward');
        
        if (userConfirm) {
            this.state.markBlockComplete(1, day, blockId);
            alert('✅ Block completed! Great work, Sergeant!');
            this.showView('daily');
        }
    }

    showRecallCompletion(day, blockId) {
        const userConfirm = confirm('Have you completed your recall practice?\n\n• Answered questions from memory\n• Checked your answers\n• Noted areas to review');
        
        if (userConfirm) {
            this.state.markBlockComplete(1, day, blockId);
            alert('✅ Recall block completed!');
            this.showView('daily');
        }
    }

    showProjectCompletion(day, blockId) {
        const dayData = CURRICULUM.week1[`day${day}`];
        const block = dayData.blocks.find(b => b.id === blockId);
        const projectName = block.projectName || `Day ${day} Project`;

        const projectContent = prompt(`Save your project: "${projectName}"\n\nPaste or describe what you created (you can also keep this in your own notes):`);
        
        if (projectContent) {
            this.state.addProject(projectName, projectContent, day);
            this.state.markBlockComplete(1, day, blockId);
            alert('✅ Project saved and block completed!');
            this.showView('daily');
        }
    }

    submitRecall(term, correctDefinition, correctExample) {
        const yourAnswer = document.getElementById('recall-answer').value.trim();
        const selectedRating = document.querySelector('.rating-btn.selected');
        
        if (!yourAnswer) {
            alert('Please write your answer first!');
            return;
        }
        
        if (!selectedRating) {
            alert('Please rate your confidence!');
            return;
        }

        const confidence = parseInt(selectedRating.dataset.rating);
        
        // Show correct answer and ask user to self-score
        const scorePrompt = `YOUR ANSWER:\n${yourAnswer}\n\n` +
                          `CORRECT ANSWER:\n${correctDefinition}\n\n` +
                          `EXAMPLE:\n${correctExample}\n\n` +
                          `How accurate was your answer? (1=Wrong, 5=Perfect)`;
        
        const scoreInput = prompt(scorePrompt);
        
        if (scoreInput) {
            const score = parseInt(scoreInput);
            if (score >= 1 && score <= 5) {
                this.state.addRecallAttempt(term, yourAnswer, correctDefinition, confidence, score);
                this.state.updateGlossaryProgress(term, score);
                alert(`✅ Recall attempt recorded!\n\nConfidence: ${confidence}/5\nAccuracy: ${score}/5\n\nKeep drilling, Sergeant!`);
                this.showView('recall'); // Refresh to get new term
            } else {
                alert('Please enter a score between 1 and 5');
            }
        }
    }

    rateTerm(term, rating) {
        this.state.updateGlossaryProgress(term, rating);
        alert(`✅ ${term} rated ${rating}/5`);
        this.showView('glossary'); // Refresh view
    }
}

// ===== INITIALIZE APP =====
const app = new BootcampApp();

// Make app globally available for onclick handlers
window.app = app;
