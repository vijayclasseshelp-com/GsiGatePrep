// GATE & GSI Exam Preparation App - BULLETPROOF FINAL VERSION
// Guaranteed to work with instant responses and zero loading states

(function() {
    'use strict';
    
    console.log('🚀 GATE & GSI Prep App - Bulletproof Version Loading...');

    // Global app state
    window.ExamApp = {
        currentUser: null,
        currentExam: null,
        currentSubject: null,
        currentQuestions: [],
        currentQuestionIndex: 0,
        userAnswers: [],
        sessionStartTime: null,
        sessionScore: { correct: 0, total: 0 },
        
        // Complete question database - instantly available
        questions: {
            "GSI": {
                "General Studies": [
                    {
                        "q": "Which country hosted the G20 summit in 2023?",
                        "options": ["Japan", "India", "Indonesia", "Brazil"],
                        "correct": 1,
                        "explanation": "India successfully hosted the G20 summit in New Delhi in September 2023, marking a significant diplomatic milestone for the country."
                    },
                    {
                        "q": "The Chandrayaan-3 mission successfully landed on which part of the Moon?",
                        "options": ["North Pole", "South Pole", "Equator", "Far Side"],
                        "correct": 1,
                        "explanation": "Chandrayaan-3 achieved a historic soft landing near the Moon's South Pole in August 2023, making India the fourth country to land on the Moon."
                    },
                    {
                        "q": "The Quit India Movement was launched in which year?",
                        "options": ["1940", "1942", "1944", "1946"],
                        "correct": 1,
                        "explanation": "The Quit India Movement was launched by Mahatma Gandhi on August 8, 1942, with the slogan 'Do or Die'."
                    },
                    {
                        "q": "Who was the first President of the Indian National Congress?",
                        "options": ["Dadabhai Naoroji", "W.C. Bonnerjee", "Surendranath Banerjee", "A.O. Hume"],
                        "correct": 1,
                        "explanation": "Womesh Chunder Bonnerjee was the first President of the Indian National Congress in 1885."
                    },
                    {
                        "q": "Which Indian state launched the 'Mission Basundhara' initiative?",
                        "options": ["Odisha", "West Bengal", "Assam", "Jharkhand"],
                        "correct": 0,
                        "explanation": "Odisha launched 'Mission Basundhara' to provide land rights and resolve land disputes through digital records."
                    }
                ],
                "Geology": [
                    {
                        "q": "The principle of uniformitarianism states that:",
                        "options": ["Past processes were different", "Present is the key to the past", "All processes are uniform", "Processes are random"],
                        "correct": 1,
                        "explanation": "Uniformitarianism, proposed by James Hutton, means that present-day geological processes help us understand past events."
                    },
                    {
                        "q": "Which layer of the Earth has the highest temperature?",
                        "options": ["Crust", "Mantle", "Outer Core", "Inner Core"],
                        "correct": 3,
                        "explanation": "The inner core reaches temperatures of 5000-6000°C, similar to the Sun's surface temperature."
                    },
                    {
                        "q": "Continental drift theory was proposed by:",
                        "options": ["Charles Darwin", "Alfred Wegener", "James Hutton", "Harry Hess"],
                        "correct": 1,
                        "explanation": "Alfred Wegener proposed continental drift theory in 1912, suggesting continents move over geological time."
                    },
                    {
                        "q": "Which mineral has the highest hardness on the Mohs scale?",
                        "options": ["Corundum", "Quartz", "Diamond", "Topaz"],
                        "correct": 2,
                        "explanation": "Diamond has hardness 10 on the Mohs scale due to its strong crystal structure."
                    },
                    {
                        "q": "Olivine has which type of silicate structure?",
                        "options": ["Framework", "Chain", "Sheet", "Isolated tetrahedra"],
                        "correct": 3,
                        "explanation": "Olivine has isolated silicate tetrahedra connected only through metal cations."
                    }
                ]
            },
            "GATE": {
                "Common Section": [
                    {
                        "q": "The concept of isostasy explains:",
                        "options": ["Ocean currents", "Crustal equilibrium", "Magnetic reversals", "Atmospheric circulation"],
                        "correct": 1,
                        "explanation": "Isostasy is the gravitational equilibrium between Earth's crust and mantle."
                    },
                    {
                        "q": "Which planet has the highest density in our solar system?",
                        "options": ["Mercury", "Venus", "Earth", "Mars"],
                        "correct": 2,
                        "explanation": "Earth has the highest density (5.52 g/cm³) due to its large iron core and compression."
                    },
                    {
                        "q": "P-waves travel faster than S-waves because:",
                        "options": ["P-waves have higher frequency", "P-waves are compressional while S-waves are shear", "P-waves travel through solids only", "P-waves have lower amplitude"],
                        "correct": 1,
                        "explanation": "P-waves are compressional waves while S-waves are shear waves. Rocks resist compression less than shearing."
                    },
                    {
                        "q": "The Mohorovičić discontinuity separates:",
                        "options": ["Crust and mantle", "Upper and lower mantle", "Mantle and outer core", "Outer and inner core"],
                        "correct": 0,
                        "explanation": "The Moho marks the boundary between Earth's crust and mantle, identified by seismic wave velocity changes."
                    }
                ],
                "Geology": [
                    {
                        "q": "River terraces form primarily due to:",
                        "options": ["Lateral erosion", "Vertical incision", "Mass wasting", "Chemical weathering"],
                        "correct": 1,
                        "explanation": "River terraces form due to vertical incision in response to base level changes or tectonic uplift."
                    },
                    {
                        "q": "In a syncline, the youngest rocks are found:",
                        "options": ["At the core", "At the limbs", "At the hinge", "Distributed randomly"],
                        "correct": 0,
                        "explanation": "In synclines, youngest rocks are at the core while older rocks are toward the limbs."
                    },
                    {
                        "q": "Normal faults are associated with:",
                        "options": ["Compression", "Extension", "Transpression", "Pure shear"],
                        "correct": 1,
                        "explanation": "Normal faults form under extensional stress where the hanging wall moves down relative to footwall."
                    }
                ],
                "Geophysics": [
                    {
                        "q": "The Bouguer anomaly is obtained by applying:",
                        "options": ["Free air correction only", "Bouguer correction only", "Free air and Bouguer corrections", "Terrain correction only"],
                        "correct": 2,
                        "explanation": "Bouguer anomaly uses both free air and Bouguer corrections to remove elevation and topographic effects."
                    },
                    {
                        "q": "Negative gravity anomalies are typically associated with:",
                        "options": ["Dense ore bodies", "Sedimentary basins", "Intrusive bodies", "Volcanic rocks"],
                        "correct": 1,
                        "explanation": "Sedimentary basins show negative anomalies because sedimentary rocks are less dense than basement rocks."
                    }
                ]
            }
        },
        
        // Exam metadata
        exams: {
            "GSI": {
                "name": "GSI Combined Geo-Scientist",
                "icon": "🌍",
                "subjects": {
                    "General Studies": { 
                        "icon": "📚", 
                        "description": "Current affairs, history, geography, polity, economics, and general science for government service preparation."
                    },
                    "Geology": { 
                        "icon": "⛰️", 
                        "description": "Physical geology, mineralogy, petrology, structural geology, and related earth science topics."
                    }
                }
            },
            "GATE": {
                "name": "GATE Geology & Geophysics", 
                "icon": "🎓",
                "subjects": {
                    "Common Section": { 
                        "icon": "📖", 
                        "description": "Earth system science, seismology, heat flow, geomagnetism, and fundamental processes."
                    },
                    "Geology": { 
                        "icon": "🏔️", 
                        "description": "Advanced geology topics including geomorphology, structural geology, and applied geology."
                    },
                    "Geophysics": { 
                        "icon": "📡", 
                        "description": "Geophysical methods including gravity, magnetic, electrical, and seismic techniques."
                    }
                }
            }
        }
    };

    // Utility functions
    const utils = {
        // Show/hide screens instantly
        showScreen: function(screenId) {
            console.log('📺 Showing screen:', screenId);
            
            // Hide all screens
            const screens = document.querySelectorAll('.screen, .content-screen');
            screens.forEach(screen => screen.classList.add('hidden'));
            
            // Show target screen
            const target = document.getElementById(screenId);
            if (target) {
                target.classList.remove('hidden');
                console.log('✅ Screen displayed successfully');
                return true;
            } else {
                console.error('❌ Screen not found:', screenId);
                return false;
            }
        },

        // Get element safely
        getElement: function(id) {
            const element = document.getElementById(id);
            if (!element) {
                console.warn('⚠️ Element not found:', id);
            }
            return element;
        },

        // Animate counter
        animateCounter: function(elementId, targetValue, duration = 800) {
            const element = this.getElement(elementId);
            if (!element) return;
            
            const startValue = 0;
            const startTime = performance.now();
            
            const animate = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const current = Math.floor(startValue + (targetValue - startValue) * progress);
                
                element.textContent = current;
                
                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };
            
            requestAnimationFrame(animate);
        },

        // Shuffle array
        shuffleArray: function(array) {
            const shuffled = [...array];
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            return shuffled;
        },

        // Save data to localStorage
        saveData: function(key, data) {
            try {
                localStorage.setItem(key, JSON.stringify(data));
                return true;
            } catch (error) {
                console.error('❌ Save error:', error);
                return false;
            }
        },

        // Load data from localStorage
        loadData: function(key) {
            try {
                const data = localStorage.getItem(key);
                return data ? JSON.parse(data) : null;
            } catch (error) {
                console.error('❌ Load error:', error);
                return null;
            }
        }
    };

    // Authentication module
    const auth = {
        // Handle login - BULLETPROOF
        login: function(email, password) {
            console.log('🔑 Processing login:', email);
            
            if (email === 'demo@example.com' && password === 'demo123') {
                console.log('✅ Valid credentials');
                
                // Create user
                window.ExamApp.currentUser = {
                    name: 'Demo User',
                    email: email,
                    loginTime: new Date().toISOString(),
                    progress: this.loadProgress()
                };
                
                // Save user
                utils.saveData('currentUser', window.ExamApp.currentUser);
                
                // Show app
                setTimeout(() => {
                    dashboard.show();
                }, 300);
                
                return true;
            } else {
                console.log('❌ Invalid credentials');
                alert('❌ Invalid credentials!\n\nUse demo login:\n📧 demo@example.com\n🔑 demo123');
                return false;
            }
        },

        // Load user progress
        loadProgress: function() {
            const saved = utils.loadData('userProgress');
            if (saved) return saved;
            
            return {
                questionsAttempted: 0,
                correctAnswers: 0,
                topicsCompleted: [],
                studyStreak: 1,
                lastStudyDate: new Date().toDateString(),
                examProgress: {
                    "GSI": { attempted: 0, correct: 0 },
                    "GATE": { attempted: 0, correct: 0 }
                }
            };
        },

        // Logout
        logout: function() {
            console.log('🚪 Logging out');
            
            if (window.ExamApp.currentUser) {
                utils.saveData('userProgress', window.ExamApp.currentUser.progress);
            }
            
            localStorage.removeItem('currentUser');
            window.ExamApp.currentUser = null;
            window.ExamApp.currentExam = null;
            window.ExamApp.currentSubject = null;
            
            utils.showScreen('login-screen');
        },

        // Check if user is logged in
        checkAuth: function() {
            const saved = utils.loadData('currentUser');
            if (saved) {
                window.ExamApp.currentUser = saved;
                return true;
            }
            return false;
        }
    };

    // Dashboard module
    const dashboard = {
        // Show dashboard
        show: function() {
            console.log('🏠 Showing dashboard');
            
            if (!utils.showScreen('dashboard')) {
                console.error('❌ Failed to show dashboard');
                return;
            }
            
            // Update user name
            const userName = utils.getElement('user-name');
            if (userName && window.ExamApp.currentUser) {
                userName.textContent = `👨‍🎓 ${window.ExamApp.currentUser.name}`;
            }
            
            // Update progress
            this.updateProgress();
            
            // Update breadcrumb
            this.updateBreadcrumb(['Dashboard']);
        },

        // Update progress display
        updateProgress: function() {
            if (!window.ExamApp.currentUser || !window.ExamApp.currentUser.progress) return;
            
            const progress = window.ExamApp.currentUser.progress;
            
            // Animate counters
            setTimeout(() => utils.animateCounter('total-questions', progress.questionsAttempted || 0), 100);
            setTimeout(() => utils.animateCounter('topics-completed', progress.topicsCompleted?.length || 0), 200);
            setTimeout(() => utils.animateCounter('study-streak', progress.studyStreak || 1), 300);
            
            // Calculate accuracy
            const accuracy = progress.questionsAttempted > 0 
                ? Math.round((progress.correctAnswers / progress.questionsAttempted) * 100) 
                : 0;
            
            setTimeout(() => {
                const accuracyElement = utils.getElement('accuracy-rate');
                if (accuracyElement) {
                    accuracyElement.textContent = accuracy + '%';
                }
            }, 400);
        },

        // Update breadcrumb
        updateBreadcrumb: function(items) {
            const breadcrumb = utils.getElement('breadcrumb');
            const content = utils.getElement('breadcrumb-content');
            
            if (!breadcrumb || !content) return;
            
            if (items.length <= 1) {
                breadcrumb.classList.add('hidden');
                return;
            }

            breadcrumb.classList.remove('hidden');
            content.innerHTML = items.map((item, index) => {
                if (index === items.length - 1) {
                    return `<span>${item}</span>`;
                } else {
                    return `<span class="breadcrumb-link" onclick="navigation.goto('${item}')">${item}</span>`;
                }
            }).join(' → ');
        }
    };

    // Subjects module
    const subjects = {
        // Show subjects screen
        show: function(examType) {
            console.log('📚 Showing subjects for:', examType);
            
            window.ExamApp.currentExam = examType;
            utils.showScreen('subjects');
            
            // Update title
            const title = utils.getElement('exam-title');
            if (title) {
                title.textContent = `${window.ExamApp.exams[examType].name} - Select Subject`;
            }
            
            // Update breadcrumb
            dashboard.updateBreadcrumb(['Dashboard', examType]);
            
            // Render subjects
            this.render();
        },

        // Render subjects grid
        render: function() {
            const grid = utils.getElement('subjects-grid');
            if (!grid) return;
            
            grid.innerHTML = '';
            const examSubjects = window.ExamApp.exams[window.ExamApp.currentExam].subjects;
            
            Object.keys(examSubjects).forEach((subjectKey, index) => {
                const subject = examSubjects[subjectKey];
                const card = document.createElement('div');
                card.className = 'subject-card';
                
                // Count questions
                const questionCount = window.ExamApp.questions[window.ExamApp.currentExam][subjectKey]?.length || 0;
                
                card.innerHTML = `
                    <div style="font-size: 2rem; margin-bottom: 12px;">${subject.icon}</div>
                    <h3>${subjectKey}</h3>
                    <p>${subject.description}</p>
                    <span class="question-count">${questionCount} practice questions</span>
                `;
                
                // Add animation delay
                card.style.animationDelay = `${index * 0.1}s`;
                
                // Add click handler
                card.addEventListener('click', () => {
                    console.log('📖 Subject selected:', subjectKey);
                    practice.start(subjectKey);
                });
                
                grid.appendChild(card);
            });
        }
    };

    // Practice module
    const practice = {
        // Start practice session
        start: function(subjectKey) {
            console.log('🎯 Starting practice:', subjectKey);
            
            window.ExamApp.currentSubject = subjectKey;
            
            // Get questions
            const questionData = window.ExamApp.questions[window.ExamApp.currentExam][subjectKey];
            if (!questionData || questionData.length === 0) {
                alert('❌ No questions available for this subject. Please try another subject.');
                return;
            }
            
            // Setup session
            window.ExamApp.currentQuestions = utils.shuffleArray([...questionData]);
            window.ExamApp.currentQuestionIndex = 0;
            window.ExamApp.userAnswers = [];
            window.ExamApp.sessionStartTime = Date.now();
            window.ExamApp.sessionScore = { correct: 0, total: 0 };
            
            // Show questions screen
            this.showQuestions();
        },

        // Show questions screen
        showQuestions: function() {
            console.log('❓ Showing questions screen');
            utils.showScreen('questions');
            
            // Update title
            const title = utils.getElement('topic-title');
            if (title) {
                title.textContent = `${window.ExamApp.currentSubject} Practice`;
            }
            
            // Update breadcrumb
            dashboard.updateBreadcrumb(['Dashboard', window.ExamApp.currentExam, window.ExamApp.currentSubject]);
            
            // Display first question
            this.displayQuestion();
        },

        // Display current question
        displayQuestion: function() {
            const question = window.ExamApp.currentQuestions[window.ExamApp.currentQuestionIndex];
            if (!question) return;
            
            console.log('📝 Displaying question', window.ExamApp.currentQuestionIndex + 1);
            
            // Update counter
            const counter = utils.getElement('question-counter');
            if (counter) {
                counter.textContent = `Question ${window.ExamApp.currentQuestionIndex + 1} of ${window.ExamApp.currentQuestions.length}`;
            }

            // Update question text
            const questionText = utils.getElement('question-text');
            if (questionText) {
                questionText.textContent = question.q;
            }

            // Create options
            const optionsDiv = utils.getElement('question-options');
            if (optionsDiv) {
                optionsDiv.innerHTML = '';
                question.options.forEach((option, index) => {
                    const button = document.createElement('button');
                    button.className = 'option-btn';
                    button.dataset.index = index;
                    
                    button.innerHTML = `
                        <span class="option-label">${String.fromCharCode(65 + index)}</span>
                        <span class="option-text">${option}</span>
                    `;
                    
                    button.addEventListener('click', () => this.selectOption(index));
                    optionsDiv.appendChild(button);
                });
            }

            // Reset UI
            this.resetUI();
            this.updateProgress();
        },

        // Reset question UI
        resetUI: function() {
            const feedback = utils.getElement('question-feedback');
            if (feedback) feedback.classList.add('hidden');
            
            const submitBtn = utils.getElement('submit-answer');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.classList.remove('hidden');
            }
            
            const nextBtn = utils.getElement('next-question');
            if (nextBtn) nextBtn.classList.add('hidden');
            
            const finishBtn = utils.getElement('finish-practice');
            if (finishBtn) finishBtn.classList.add('hidden');
        },

        // Select option
        selectOption: function(index) {
            console.log('✅ Option selected:', index);
            
            // Remove previous selections
            document.querySelectorAll('.option-btn').forEach(btn => {
                btn.classList.remove('selected');
            });

            // Mark selected
            const selectedBtn = document.querySelector(`[data-index="${index}"]`);
            if (selectedBtn) {
                selectedBtn.classList.add('selected');
            }

            // Enable submit
            const submitBtn = utils.getElement('submit-answer');
            if (submitBtn) {
                submitBtn.disabled = false;
            }
        },

        // Submit answer
        submitAnswer: function() {
            console.log('📤 Submitting answer');
            
            const selectedOption = document.querySelector('.option-btn.selected');
            if (!selectedOption) return;

            const selectedIndex = parseInt(selectedOption.dataset.index);
            const question = window.ExamApp.currentQuestions[window.ExamApp.currentQuestionIndex];
            const isCorrect = selectedIndex === question.correct;

            // Store answer
            window.ExamApp.userAnswers.push({
                questionIndex: window.ExamApp.currentQuestionIndex,
                selectedAnswer: selectedIndex,
                correctAnswer: question.correct,
                isCorrect: isCorrect
            });

            // Update scores
            window.ExamApp.sessionScore.total++;
            if (isCorrect) {
                window.ExamApp.sessionScore.correct++;
            }

            // Update user progress
            if (window.ExamApp.currentUser) {
                window.ExamApp.currentUser.progress.questionsAttempted++;
                if (isCorrect) {
                    window.ExamApp.currentUser.progress.correctAnswers++;
                }
            }

            // Show feedback
            this.showFeedback(selectedIndex, question.correct, question.explanation);
            
            // Update UI
            this.updateAfterSubmit();
            this.updateScoreDisplay();
        },

        // Show answer feedback
        showFeedback: function(selectedIndex, correctIndex, explanation) {
            // Style options
            document.querySelectorAll('.option-btn').forEach((btn, index) => {
                btn.disabled = true;
                if (index === correctIndex) {
                    btn.classList.add('correct');
                } else if (index === selectedIndex && selectedIndex !== correctIndex) {
                    btn.classList.add('incorrect');
                }
            });

            // Show feedback
            const isCorrect = selectedIndex === correctIndex;
            const feedback = utils.getElement('question-feedback');
            const message = utils.getElement('feedback-message');
            const explanationDiv = utils.getElement('explanation');
            
            if (message) {
                message.className = `feedback-message ${isCorrect ? 'correct' : 'incorrect'}`;
                message.innerHTML = isCorrect ? 
                    '✅ Excellent! Correct answer!' : 
                    '❌ Incorrect. The correct answer is highlighted above.';
            }
            
            if (explanationDiv) {
                explanationDiv.textContent = explanation;
            }
            
            if (feedback) {
                feedback.classList.remove('hidden');
            }
        },

        // Update UI after submit
        updateAfterSubmit: function() {
            const submitBtn = utils.getElement('submit-answer');
            if (submitBtn) submitBtn.classList.add('hidden');
            
            if (window.ExamApp.currentQuestionIndex < window.ExamApp.currentQuestions.length - 1) {
                const nextBtn = utils.getElement('next-question');
                if (nextBtn) nextBtn.classList.remove('hidden');
            } else {
                const finishBtn = utils.getElement('finish-practice');
                if (finishBtn) finishBtn.classList.remove('hidden');
            }
        },

        // Next question
        nextQuestion: function() {
            console.log('➡️ Next question');
            window.ExamApp.currentQuestionIndex++;
            this.displayQuestion();
        },

        // Finish practice
        finish: function() {
            console.log('🏁 Finishing practice');
            
            const timeSpent = Math.round((Date.now() - window.ExamApp.sessionStartTime) / 1000 / 60);
            
            // Mark topic completed
            if (window.ExamApp.currentUser) {
                const topicId = `${window.ExamApp.currentExam}_${window.ExamApp.currentSubject}`;
                if (!window.ExamApp.currentUser.progress.topicsCompleted.includes(topicId)) {
                    window.ExamApp.currentUser.progress.topicsCompleted.push(topicId);
                }
                utils.saveData('userProgress', window.ExamApp.currentUser.progress);
            }
            
            results.show(timeSpent);
        },

        // Update progress bar
        updateProgress: function() {
            const progressFill = utils.getElement('progress-fill');
            const progressText = utils.getElement('progress-text');
            
            if (progressFill && progressText) {
                const progress = ((window.ExamApp.currentQuestionIndex) / window.ExamApp.currentQuestions.length) * 100;
                progressFill.style.width = progress + '%';
                progressText.textContent = `${Math.round(progress)}% Complete`;
            }
        },

        // Update score display
        updateScoreDisplay: function() {
            const scoreDisplay = utils.getElement('score-display');
            if (scoreDisplay) {
                scoreDisplay.textContent = `Score: ${window.ExamApp.sessionScore.correct}/${window.ExamApp.sessionScore.total}`;
            }
        }
    };

    // Results module
    const results = {
        // Show results screen
        show: function(timeSpent) {
            console.log('🎉 Showing results');
            utils.showScreen('results');
            
            const correctAnswers = window.ExamApp.sessionScore.correct;
            const totalQuestions = window.ExamApp.sessionScore.total;
            const accuracy = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;
            
            // Calculate grade
            let grade = 'F';
            if (accuracy >= 90) grade = 'A+';
            else if (accuracy >= 80) grade = 'A';
            else if (accuracy >= 70) grade = 'B+';
            else if (accuracy >= 60) grade = 'B';
            else if (accuracy >= 50) grade = 'C';
            else if (accuracy >= 40) grade = 'D';

            // Update display
            const elements = {
                'final-score': `${correctAnswers}/${totalQuestions}`,
                'final-accuracy': `${accuracy}%`,
                'time-spent': timeSpent > 0 ? `${timeSpent}m` : '<1m',
                'performance-grade': grade
            };

            Object.entries(elements).forEach(([id, value]) => {
                const element = utils.getElement(id);
                if (element) element.textContent = value;
            });
        }
    };

    // Navigation module
    const navigation = {
        // Navigate to section
        goto: function(section) {
            console.log('🧭 Navigating to:', section);
            
            switch(section) {
                case 'Dashboard':
                    dashboard.show();
                    break;
                case 'GSI':
                case 'GATE':
                    subjects.show(section);
                    break;
            }
        }
    };

    // Event handlers - BULLETPROOF BINDING
    const events = {
        // Setup all events
        setup: function() {
            console.log('🔗 Setting up events');
            
            // Login form - MULTIPLE BINDING METHODS
            this.setupLogin();
            
            // Logout
            this.bindClick('logout-btn', () => auth.logout());
            
            // Exam cards
            document.querySelectorAll('.exam-card').forEach(card => {
                card.addEventListener('click', (e) => {
                    const examType = e.currentTarget.dataset.exam;
                    subjects.show(examType);
                });
            });

            // Question controls
            this.bindClick('submit-answer', () => practice.submitAnswer());
            this.bindClick('next-question', () => practice.nextQuestion());
            this.bindClick('finish-practice', () => practice.finish());
            this.bindClick('back-to-subjects', () => subjects.show(window.ExamApp.currentExam));

            // Result controls
            this.bindClick('practice-again', () => practice.start(window.ExamApp.currentSubject));
            this.bindClick('new-subject', () => subjects.show(window.ExamApp.currentExam));
            this.bindClick('back-to-dashboard', () => dashboard.show());
        },

        // Setup login with multiple methods
        setupLogin: function() {
            const form = utils.getElement('login-form');
            const button = document.querySelector('button[type="submit"]');
            
            if (form) {
                // Method 1: Form submit
                form.addEventListener('submit', this.handleLogin);
                
                // Method 2: Button click
                if (button) {
                    button.addEventListener('click', this.handleLogin);
                }
                
                // Method 3: Enter key on inputs
                const inputs = form.querySelectorAll('input');
                inputs.forEach(input => {
                    input.addEventListener('keypress', (e) => {
                        if (e.key === 'Enter') {
                            this.handleLogin(e);
                        }
                    });
                });
                
                console.log('✅ Login events bound with multiple methods');
            }
        },

        // Handle login
        handleLogin: function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            console.log('🔑 Login event triggered');
            
            const email = utils.getElement('email')?.value?.trim() || '';
            const password = utils.getElement('password')?.value?.trim() || '';
            
            // Show visual feedback
            const button = e.target.closest('form')?.querySelector('button[type="submit"]') || e.target;
            if (button) {
                const originalText = button.textContent;
                button.textContent = '✅ Signing in...';
                button.disabled = true;
                
                setTimeout(() => {
                    button.textContent = originalText;
                    button.disabled = false;
                }, 1000);
            }
            
            // Process login
            auth.login(email, password);
        },

        // Bind click event safely
        bindClick: function(elementId, handler) {
            const element = utils.getElement(elementId);
            if (element) {
                element.addEventListener('click', handler);
                console.log(`✅ ${elementId} click event bound`);
            }
        }
    };

    // App initialization - BULLETPROOF
    function initializeApp() {
        console.log('🚀 Initializing GATE & GSI Prep App...');
        
        try {
            // Setup events first
            events.setup();
            
            // Check authentication
            if (auth.checkAuth()) {
                console.log('👤 User already logged in');
                dashboard.show();
            } else {
                console.log('🔓 No user logged in, showing login');
                utils.showScreen('login-screen');
            }
            
            // Make modules globally accessible
            window.navigation = navigation;
            window.auth = auth;
            window.dashboard = dashboard;
            window.subjects = subjects;
            window.practice = practice;
            window.results = results;
            
            console.log('✅ App initialized successfully!');
            console.log('🎯 Ready for instant practice - Zero loading states!');
            
        } catch (error) {
            console.error('💥 Initialization error:', error);
            alert('⚠️ App failed to start. Refreshing...');
            window.location.reload();
        }
    }

    // Start app when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeApp);
    } else {
        initializeApp();
    }

    // Backup initialization
    setTimeout(() => {
        if (!window.navigation) {
            console.log('⚠️ Backup initialization triggered');
            initializeApp();
        }
    }, 1000);

    console.log('📚 GATE & GSI Prep App - Script Loaded Successfully!');

})();