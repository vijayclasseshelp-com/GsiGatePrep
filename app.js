// GATE & GSI Prep Master - Main JavaScript Application

class GateGsiApp {
    constructor() {
        this.currentExam = null;
        this.currentSubject = null;
        this.currentTopic = null;
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.userAnswers = {};
        
        this.examData = {
            "GSI": {
                "name": "GSI (Geological Survey of India)",
                "subjects": {
                    "general_studies": {
                        "name": "General Studies",
                        "topics": [
                            {"key": "currentEvents", "name": "Current Events", "description": "National and international current affairs, recent developments"},
                            {"key": "historyIndia", "name": "History of India", "description": "Indian history and national movement, freedom struggle"},
                            {"key": "geography", "name": "Geography", "description": "Physical, social, and economic geography of India and world"},
                            {"key": "polityGovernance", "name": "Polity & Governance", "description": "Constitution, political system, panchayati raj, public policy"},
                            {"key": "economicDevelopment", "name": "Economic Development", "description": "Sustainable development, poverty, demographics, social sector"},
                            {"key": "environmentalEcology", "name": "Environmental Ecology", "description": "Biodiversity, climate change, environmental issues"},
                            {"key": "generalScience", "name": "General Science", "description": "Basic scientific principles and applications"}
                        ]
                    },
                    "geology_hydrogeology": {
                        "name": "Geology/Hydrogeology",
                        "topics": [
                            {"key": "physicalGeology", "name": "Physical Geology", "description": "Uniformitarianism, Earth structure, plate tectonics, landforms"},
                            {"key": "structuralGeology", "name": "Structural Geology", "description": "Stress, strain, folds, faults, stereographic projections"},
                            {"key": "mineralogy", "name": "Mineralogy", "description": "Crystal symmetry, mineral classification, optical properties"},
                            {"key": "igneousPetrology", "name": "Igneous Petrology", "description": "Magma evolution, IUGS classification, phase diagrams"},
                            {"key": "metamorphicPetrology", "name": "Metamorphic Petrology", "description": "Metamorphism types, textures, facies, geothermal gradients"},
                            {"key": "sedimentology", "name": "Sedimentology", "description": "Sediment origin, textures, depositional environments"},
                            {"key": "paleontology", "name": "Paleontology", "description": "Fossils, invertebrates, evolution, microfossils"},
                            {"key": "stratigraphy", "name": "Stratigraphy", "description": "Stratigraphic principles, Indian geology, Precambrian"},
                            {"key": "economicGeology", "name": "Economic Geology", "description": "Ore deposits, formation processes, Indian minerals"},
                            {"key": "hydrogeology", "name": "Hydrogeology", "description": "Groundwater, aquifers, Darcy's law, isotopes"}
                        ]
                    },
                    "geophysics": {
                        "name": "Geophysics",
                        "topics": [
                            {"key": "solidEarthGeophysics", "name": "Solid Earth Geophysics", "description": "Gravity, magnetism, seismology, plate tectonics"},
                            {"key": "mathematicalMethods", "name": "Mathematical Methods", "description": "Vector analysis, matrices, inverse theory, statistics"}
                        ]
                    },
                    "chemistry": {
                        "name": "Chemistry",
                        "topics": [
                            {"key": "atomicStructure", "name": "Atomic Structure", "description": "Atomic theory, bonding, quantum mechanics"},
                            {"key": "thermodynamics", "name": "Thermodynamics", "description": "Chemical thermodynamics, kinetics, equilibrium"},
                            {"key": "solutions", "name": "Solutions", "description": "Solution chemistry, colligative properties"},
                            {"key": "electrochemistry", "name": "Electrochemistry", "description": "Electrochemical cells, redox reactions"},
                            {"key": "coordinationChemistry", "name": "Coordination Chemistry", "description": "Complex compounds, crystal field theory"},
                            {"key": "organicChemistry", "name": "Organic Chemistry", "description": "Organic reactions, mechanisms, synthesis"},
                            {"key": "analyticalChemistry", "name": "Analytical Chemistry", "description": "Quantitative analysis, separation techniques"},
                            {"key": "environmentalChemistry", "name": "Environmental Chemistry", "description": "Pollution, environmental processes"},
                            {"key": "geochemistry", "name": "Geochemistry", "description": "Earth chemistry, mineral chemistry"},
                            {"key": "instrumentalMethods", "name": "Instrumental Methods", "description": "Spectroscopy, chromatography, analytical instruments"}
                        ]
                    }
                }
            },
            "GATE": {
                "name": "GATE (Graduate Aptitude Test)",
                "subjects": {
                    "common_section": {
                        "name": "Common Section",
                        "topics": [
                            {"key": "earthPlanetary", "name": "Earth & Planetary System", "description": "Terrestrial planets, Earth structure, composition"},
                            {"key": "seismology", "name": "Seismology", "description": "Body waves, surface waves, Earth's interior"},
                            {"key": "heatFlow", "name": "Heat Flow", "description": "Geothermal gradients, heat transfer"},
                            {"key": "geomagnetism", "name": "Geomagnetism", "description": "Magnetic field, paleomagnetism"},
                            {"key": "plateTectonics", "name": "Plate Tectonics", "description": "Continental drift, seafloor spreading, orogeny"},
                            {"key": "weatheringLandforms", "name": "Weathering & Landforms", "description": "Weathering processes, erosional landforms"},
                            {"key": "basicStructural", "name": "Basic Structural Geology", "description": "Stress, strain, folds, faults"},
                            {"key": "crystallography", "name": "Crystallography", "description": "Crystal systems, symmetry, point groups"},
                            {"key": "mineralogy", "name": "Mineralogy", "description": "Silicate structures, rock-forming minerals"},
                            {"key": "petrologyBasics", "name": "Petrology Basics", "description": "Igneous, sedimentary, metamorphic rocks"},
                            {"key": "geologicalTime", "name": "Geological Time Scale", "description": "Geochronology, absolute dating"},
                            {"key": "stratigraphy", "name": "Stratigraphy", "description": "Stratigraphic principles, Indian divisions"},
                            {"key": "mineralResources", "name": "Mineral Resources", "description": "Coal, petroleum, mineral deposits of India"},
                            {"key": "remoteSensing", "name": "Remote Sensing", "description": "Satellite imagery, GIS applications"},
                            {"key": "hydrogeologyElements", "name": "Hydrogeology Elements", "description": "Groundwater basics, aquifer properties"},
                            {"key": "geophysicalProspecting", "name": "Geophysical Prospecting", "description": "Gravity, magnetic, electrical, seismic methods"}
                        ]
                    },
                    "geology": {
                        "name": "Geology",
                        "topics": [
                            {"key": "geomorphology", "name": "Geomorphology", "description": "Landform processes, evolution, tectonic geomorphology"},
                            {"key": "structuralGeology", "name": "Structural Geology", "description": "Rock deformation, structures, map interpretation"},
                            {"key": "crystallographyMineralogy", "name": "Crystallography & Mineralogy", "description": "Crystal symmetry, mineral properties"},
                            {"key": "geochemistry", "name": "Geochemistry", "description": "Element distribution, isotopes, thermodynamics"},
                            {"key": "igneousPetrology", "name": "Igneous Petrology", "description": "Igneous rocks, differentiation, phase diagrams"},
                            {"key": "sedimentology", "name": "Sedimentology", "description": "Sedimentary processes, facies, basin analysis"},
                            {"key": "metamorphicPetrology", "name": "Metamorphic Petrology", "description": "Metamorphic conditions, facies, P-T paths"},
                            {"key": "paleobiology", "name": "Paleobiology", "description": "Life evolution, extinctions, paleoenvironments"},
                            {"key": "stratigraphy", "name": "Stratigraphy", "description": "Stratigraphic correlation, sequence stratigraphy"},
                            {"key": "resourceGeology", "name": "Resource Geology", "description": "Ore deposits, exploration, mining"},
                            {"key": "globalTectonics", "name": "Global Tectonics", "description": "Plate motions, supercontinent cycles"},
                            {"key": "appliedGeology", "name": "Applied Geology", "description": "Engineering geology, rock mechanics, hazards"},
                            {"key": "hydrogeology", "name": "Hydrogeology", "description": "Groundwater flow, well hydraulics"},
                            {"key": "remoteSensing", "name": "Remote Sensing", "description": "Digital processing, GIS operations"}
                        ]
                    },
                    "geophysics": {
                        "name": "Geophysics",
                        "topics": [
                            {"key": "solidEarthGeophysics", "name": "Solid-Earth Geophysics", "description": "Earth as planet, physical properties"},
                            {"key": "geodesy", "name": "Geodesy", "description": "Reference systems, GPS, surveying"},
                            {"key": "earthquakeSeismology", "name": "Earthquake Seismology", "description": "Elasticity theory, focal mechanisms"},
                            {"key": "potentialFields", "name": "Potential Fields", "description": "Laplace equations, boundary problems"},
                            {"key": "gravityMethods", "name": "Gravity Methods", "description": "Gravity surveys, anomaly interpretation"},
                            {"key": "magneticMethods", "name": "Magnetic Methods", "description": "Magnetic surveys, data processing"},
                            {"key": "electricalMethods", "name": "Electrical Methods", "description": "Resistivity, IP, SP methods"},
                            {"key": "electromagneticMethods", "name": "Electromagnetic Methods", "description": "EM induction, various EM methods"},
                            {"key": "seismicMethods", "name": "Seismic Methods", "description": "Reflection, refraction, processing"},
                            {"key": "wellLogging", "name": "Well Logging", "description": "Log types, formation evaluation"},
                            {"key": "radioactiveMethods", "name": "Radioactive Methods", "description": "Radiometric prospecting, detectors"},
                            {"key": "geophysicalInversion", "name": "Geophysical Inversion", "description": "Forward/inverse problems, optimization"}
                        ]
                    }
                }
            }
        };

        this.init();
    }

    init() {
        this.bindEvents();
        this.resetAppState();
        this.showWelcomeScreen();
    }

    resetAppState() {
        // Reset all state variables
        this.currentExam = null;
        this.currentSubject = null;
        this.currentTopic = null;
        this.questions = [];
        this.userAnswers = {};
        
        // Hide all sections initially
        document.getElementById('subjectSelector').style.display = 'none';
        document.getElementById('topicNavigation').style.display = 'none';
        document.getElementById('loadingState').style.display = 'none';
        
        // Close any open modals
        this.closeModal();
        
        // Clear any active states
        document.querySelectorAll('.exam-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.subject-item').forEach(item => item.classList.remove('active'));
        document.querySelectorAll('.topic-item').forEach(item => item.classList.remove('active'));
    }

    bindEvents() {
        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', () => {
                this.toggleMobileMenu();
            });
        }

        // Exam selection
        document.querySelectorAll('.exam-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.selectExam(e.target.dataset.exam);
            });
        });

        // Generate questions button
        const generateBtn = document.getElementById('generateQuestionsBtn');
        if (generateBtn) {
            generateBtn.addEventListener('click', () => {
                this.generateQuestions();
            });
        }

        // Explain concept button
        const explainBtn = document.getElementById('explainConceptBtn');
        if (explainBtn) {
            explainBtn.addEventListener('click', () => {
                this.explainConcept();
            });
        }

        // Modal close
        const closeBtn = document.getElementById('closeModal');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                this.closeModal();
            });
        }

        // Overlay click to close modal
        const overlay = document.getElementById('overlay');
        if (overlay) {
            overlay.addEventListener('click', () => {
                this.closeModal();
            });
        }

        // Topic search
        const topicSearch = document.getElementById('topicSearch');
        if (topicSearch) {
            topicSearch.addEventListener('input', (e) => {
                this.filterTopics(e.target.value);
            });
        }

        // Escape key to close modal
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModal();
            }
        });
    }

    toggleMobileMenu() {
        const sidebar = document.getElementById('sidebar');
        if (sidebar) {
            sidebar.classList.toggle('open');
        }
    }

    showWelcomeScreen() {
        const welcomeScreen = document.getElementById('welcomeScreen');
        const topicInterface = document.getElementById('topicInterface');
        
        if (welcomeScreen) welcomeScreen.style.display = 'block';
        if (topicInterface) topicInterface.style.display = 'none';
    }

    showTopicInterface() {
        const welcomeScreen = document.getElementById('welcomeScreen');
        const topicInterface = document.getElementById('topicInterface');
        
        if (welcomeScreen) welcomeScreen.style.display = 'none';
        if (topicInterface) topicInterface.style.display = 'block';
    }

    selectExam(examType) {
        if (!examType || !this.examData[examType]) return;
        
        this.currentExam = examType;
        this.currentSubject = null;
        this.currentTopic = null;

        // Update exam button states
        document.querySelectorAll('.exam-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        const selectedBtn = document.querySelector(`[data-exam="${examType}"]`);
        if (selectedBtn) {
            selectedBtn.classList.add('active');
        }

        // Reset other UI states
        document.getElementById('topicNavigation').style.display = 'none';
        
        // Clear any existing content
        const subjectList = document.getElementById('subjectList');
        if (subjectList) {
            subjectList.innerHTML = '';
        }

        // Show subject selector and populate it
        this.showSubjects();
    }

    showSubjects() {
        const subjectSelector = document.getElementById('subjectSelector');
        const subjectList = document.getElementById('subjectList');
        
        if (!subjectSelector || !subjectList || !this.currentExam) return;
        
        // Show the subject selector section
        subjectSelector.style.display = 'block';

        const subjects = this.examData[this.currentExam].subjects;
        
        Object.keys(subjects).forEach(subjectKey => {
            const subject = subjects[subjectKey];
            const subjectElement = document.createElement('div');
            subjectElement.className = 'subject-item';
            subjectElement.dataset.subject = subjectKey;
            subjectElement.innerHTML = `
                <h4>${subject.name}</h4>
                <p>${subject.topics.length} topics available</p>
            `;
            
            subjectElement.addEventListener('click', () => {
                this.selectSubject(subjectKey);
            });
            
            subjectList.appendChild(subjectElement);
        });
    }

    selectSubject(subjectKey) {
        if (!subjectKey || !this.currentExam) return;
        
        this.currentSubject = subjectKey;
        this.currentTopic = null;

        // Update subject button states
        document.querySelectorAll('.subject-item').forEach(item => {
            item.classList.remove('active');
        });
        const selectedSubject = document.querySelector(`[data-subject="${subjectKey}"]`);
        if (selectedSubject) {
            selectedSubject.classList.add('active');
        }

        // Show topics for this subject
        this.showTopics();
    }

    showTopics() {
        const topicNavigation = document.getElementById('topicNavigation');
        const topicList = document.getElementById('topicList');
        
        if (!topicNavigation || !topicList || !this.currentExam || !this.currentSubject) return;
        
        // Clear existing content
        topicList.innerHTML = '';
        
        // Show the topic navigation section
        topicNavigation.style.display = 'block';

        const topics = this.examData[this.currentExam].subjects[this.currentSubject].topics;
        
        topics.forEach(topic => {
            const topicElement = document.createElement('div');
            topicElement.className = 'topic-item';
            topicElement.dataset.topic = topic.key;
            topicElement.innerHTML = `
                <h5>${topic.name}</h5>
                <p>${topic.description}</p>
            `;
            
            topicElement.addEventListener('click', () => {
                this.selectTopic(topic.key);
            });
            
            topicList.appendChild(topicElement);
        });

        // Clear the search input
        const topicSearch = document.getElementById('topicSearch');
        if (topicSearch) {
            topicSearch.value = '';
        }
    }

    selectTopic(topicKey) {
        if (!topicKey || !this.currentExam || !this.currentSubject) return;
        
        this.currentTopic = topicKey;
        this.questions = [];
        this.userAnswers = {};

        // Update topic button states
        document.querySelectorAll('.topic-item').forEach(item => {
            item.classList.remove('active');
        });
        const selectedTopic = document.querySelector(`[data-topic="${topicKey}"]`);
        if (selectedTopic) {
            selectedTopic.classList.add('active');
        }

        // Find topic details
        const topics = this.examData[this.currentExam].subjects[this.currentSubject].topics;
        const topic = topics.find(t => t.key === topicKey);
        
        if (!topic) return;

        // Update topic interface
        const topicTitle = document.getElementById('topicTitle');
        const topicDescription = document.getElementById('topicDescription');
        
        if (topicTitle) topicTitle.textContent = topic.name;
        if (topicDescription) topicDescription.textContent = topic.description;

        // Show topic interface
        this.showTopicInterface();

        // Clear questions container and hide loading
        const questionsContainer = document.getElementById('questionsContainer');
        const loadingState = document.getElementById('loadingState');
        
        if (questionsContainer) questionsContainer.innerHTML = '';
        if (loadingState) loadingState.style.display = 'none';

        // Close mobile menu if open
        const sidebar = document.getElementById('sidebar');
        if (sidebar) sidebar.classList.remove('open');
    }

    filterTopics(searchTerm) {
        const topicItems = document.querySelectorAll('.topic-item');
        const searchLower = searchTerm.toLowerCase();

        topicItems.forEach(item => {
            const nameElement = item.querySelector('h5');
            const descElement = item.querySelector('p');
            
            if (nameElement && descElement) {
                const topicName = nameElement.textContent.toLowerCase();
                const topicDesc = descElement.textContent.toLowerCase();
                
                if (topicName.includes(searchLower) || topicDesc.includes(searchLower)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            }
        });
    }

    async generateQuestions() {
        if (!this.currentTopic) return;

        // Show loading state
        const loadingState = document.getElementById('loadingState');
        const questionsContainer = document.getElementById('questionsContainer');
        
        if (loadingState) loadingState.style.display = 'block';
        if (questionsContainer) questionsContainer.innerHTML = '';

        try {
            // Simulate AI generation delay
            await this.delay(2000);

            // Generate mock questions
            const questions = this.generateMockQuestions();
            this.questions = questions;

            // Hide loading state
            if (loadingState) loadingState.style.display = 'none';

            // Display questions
            this.displayQuestions();
        } catch (error) {
            console.error('Error generating questions:', error);
            if (loadingState) loadingState.style.display = 'none';
        }
    }

    generateMockQuestions() {
        if (!this.currentExam || !this.currentSubject || !this.currentTopic) return [];
        
        const topics = this.examData[this.currentExam].subjects[this.currentSubject].topics;
        const topic = topics.find(t => t.key === this.currentTopic);
        
        if (!topic) return [];
        
        const sampleQuestions = [
            {
                q: `Which of the following best describes the fundamental principle related to ${topic.name}?`,
                o: [
                    "The primary mechanism involves structural deformation",
                    "The process is governed by thermodynamic equilibrium",
                    "The concept relies on field observations and measurements",
                    "The theory is based on laboratory experimental results"
                ],
                a: "The concept relies on field observations and measurements"
            },
            {
                q: `In the context of ${topic.name}, what is the most significant factor that influences the observed phenomena?`,
                o: [
                    "Temperature and pressure conditions",
                    "Chemical composition and mineralogy",
                    "Time scale and geological processes",
                    "All of the above factors are equally important"
                ],
                a: "All of the above factors are equally important"
            },
            {
                q: `The application of ${topic.name} principles is most relevant in which of the following scenarios?`,
                o: [
                    "Resource exploration and extraction",
                    "Environmental impact assessment",
                    "Academic research and theoretical studies",
                    "All of the above applications"
                ],
                a: "All of the above applications"
            },
            {
                q: `Which analytical technique is commonly used to study phenomena related to ${topic.name}?`,
                o: [
                    "X-ray diffraction analysis",
                    "Microscopic examination",
                    "Geochemical analysis",
                    "Depends on the specific aspect being studied"
                ],
                a: "Depends on the specific aspect being studied"
            },
            {
                q: `The historical development of ${topic.name} concepts was primarily influenced by which factor?`,
                o: [
                    "Advanced technological capabilities",
                    "Theoretical mathematical models",
                    "Field observations and empirical data",
                    "International collaborative research"
                ],
                a: "Field observations and empirical data"
            }
        ];

        return sampleQuestions;
    }

    displayQuestions() {
        const container = document.getElementById('questionsContainer');
        if (!container || !this.questions.length) return;
        
        container.innerHTML = '';

        this.questions.forEach((question, index) => {
            const questionCard = this.createQuestionCard(question, index);
            container.appendChild(questionCard);
        });
    }

    createQuestionCard(question, index) {
        const card = document.createElement('div');
        card.className = 'question-card fade-in';
        card.innerHTML = `
            <div class="question-header">
                <span class="question-number">Question ${index + 1}</span>
            </div>
            <div class="question-text">${question.q}</div>
            <div class="options-list">
                ${question.o.map((option, optIndex) => `
                    <div class="option-item" data-question="${index}" data-option="${optIndex}">
                        <div class="option-letter">${String.fromCharCode(65 + optIndex)}</div>
                        <div class="option-text">${option}</div>
                    </div>
                `).join('')}
            </div>
            <div class="question-actions">
                <button class="btn btn--secondary" onclick="window.app.showAnswer(${index})">Show Answer</button>
                <button class="btn btn--outline" onclick="window.app.explainAnswer(${index})">Explain Answer</button>
            </div>
            <div class="answer-feedback" id="feedback-${index}" style="display: none;"></div>
        `;

        // Add click events to options
        card.querySelectorAll('.option-item').forEach(option => {
            option.addEventListener('click', () => {
                this.selectOption(option);
            });
        });

        return card;
    }

    selectOption(optionElement) {
        const questionIndex = parseInt(optionElement.dataset.question);
        const optionIndex = parseInt(optionElement.dataset.option);

        // Clear previous selections for this question
        const questionCard = optionElement.closest('.question-card');
        if (questionCard) {
            questionCard.querySelectorAll('.option-item').forEach(opt => {
                opt.classList.remove('selected');
            });

            // Mark this option as selected
            optionElement.classList.add('selected');

            // Store user answer
            this.userAnswers[questionIndex] = optionIndex;
        }
    }

    showAnswer(questionIndex) {
        if (!this.questions[questionIndex]) return;
        
        const question = this.questions[questionIndex];
        const correctAnswer = question.a;
        const correctIndex = question.o.indexOf(correctAnswer);
        const userAnswerIndex = this.userAnswers[questionIndex];

        // Find question card
        const questionCards = document.querySelectorAll('.question-card');
        const questionCard = questionCards[questionIndex];
        const feedback = document.getElementById(`feedback-${questionIndex}`);
        
        if (!questionCard || !feedback) return;
        
        const options = questionCard.querySelectorAll('.option-item');

        // Highlight correct answer
        if (options[correctIndex]) {
            options[correctIndex].classList.add('correct');
        }

        // Highlight user's answer if wrong
        if (userAnswerIndex !== undefined && userAnswerIndex !== correctIndex && options[userAnswerIndex]) {
            options[userAnswerIndex].classList.add('incorrect');
        }

        // Show feedback
        feedback.style.display = 'block';
        if (userAnswerIndex === correctIndex) {
            feedback.textContent = '✅ Correct! Well done.';
            feedback.className = 'answer-feedback correct';
        } else if (userAnswerIndex !== undefined) {
            feedback.textContent = '❌ Incorrect. The correct answer is highlighted in green.';
            feedback.className = 'answer-feedback incorrect';
        } else {
            feedback.textContent = `💡 The correct answer is: ${correctAnswer}`;
            feedback.className = 'answer-feedback correct';
        }
    }

    async explainAnswer(questionIndex) {
        if (!this.questions[questionIndex] || !this.currentTopic) return;
        
        const question = this.questions[questionIndex];
        const topics = this.examData[this.currentExam].subjects[this.currentSubject].topics;
        const topic = topics.find(t => t.key === this.currentTopic);
        
        if (!topic) return;

        this.openModal('Answer Explanation');
        this.showModalLoading();

        try {
            // Simulate AI explanation generation
            await this.delay(1500);

            const explanation = this.generateAnswerExplanation(question, topic);
            this.showModalContent(explanation);
        } catch (error) {
            console.error('Error generating explanation:', error);
            this.showModalContent('<p>Error generating explanation. Please try again.</p>');
        }
    }

    generateAnswerExplanation(question, topic) {
        return `
            <h4>Question Analysis</h4>
            <p>This question tests your understanding of <strong>${topic.name}</strong> concepts, specifically focusing on ${topic.description.toLowerCase()}.</p>
            
            <h4>Correct Answer</h4>
            <p><strong>${question.a}</strong></p>
            
            <h4>Detailed Explanation</h4>
            <p>The correct answer is based on fundamental principles of ${topic.name}. In the context of ${this.currentExam} examinations, this topic requires understanding of:</p>
            
            <ul>
                <li><strong>Theoretical Foundation:</strong> The underlying scientific principles that govern this concept</li>
                <li><strong>Practical Applications:</strong> How these principles are applied in real-world scenarios</li>
                <li><strong>Common Misconceptions:</strong> Areas where students typically struggle or make errors</li>
                <li><strong>Exam Strategy:</strong> Key points to remember when tackling similar questions</li>
            </ul>
            
            <h4>Why Other Options Are Incorrect</h4>
            <p>The other options, while plausible, fail to capture the complete understanding required for this topic. Each incorrect option represents a common misconception or incomplete knowledge of the subject matter.</p>
            
            <h4>Study Tips</h4>
            <p>To master this topic, focus on understanding the fundamental concepts rather than memorizing facts. Practice with multiple question types and always relate theoretical knowledge to practical applications in geological sciences.</p>
        `;
    }

    async explainConcept() {
        if (!this.currentTopic) return;

        const topics = this.examData[this.currentExam].subjects[this.currentSubject].topics;
        const topic = topics.find(t => t.key === this.currentTopic);
        
        if (!topic) return;

        this.openModal(`Concept Explanation: ${topic.name}`);
        this.showModalLoading();

        try {
            // Simulate AI explanation generation
            await this.delay(2000);

            const explanation = this.generateConceptExplanation(topic);
            this.showModalContent(explanation);
        } catch (error) {
            console.error('Error generating concept explanation:', error);
            this.showModalContent('<p>Error generating concept explanation. Please try again.</p>');
        }
    }

    generateConceptExplanation(topic) {
        return `
            <h4>Overview</h4>
            <p><strong>${topic.name}</strong> is a fundamental concept in ${this.examData[this.currentExam].subjects[this.currentSubject].name} that focuses on ${topic.description.toLowerCase()}.</p>
            
            <h4>Key Concepts</h4>
            <ul>
                <li><strong>Definition:</strong> ${topic.name} encompasses the study and understanding of specific geological/scientific phenomena</li>
                <li><strong>Scope:</strong> The field covers both theoretical principles and practical applications</li>
                <li><strong>Methodology:</strong> Research and analysis in this area employ various scientific techniques and approaches</li>
                <li><strong>Applications:</strong> The knowledge is applied in exploration, research, and environmental studies</li>
            </ul>
            
            <h4>Important Principles</h4>
            <p>Understanding ${topic.name} requires familiarity with several core principles:</p>
            <ul>
                <li>Fundamental scientific laws and theories that govern the phenomena</li>
                <li>Observational and analytical techniques used in the field</li>
                <li>Relationship between different components and processes</li>
                <li>Historical development and current research trends</li>
            </ul>
            
            <h4>Exam Relevance</h4>
            <p>In ${this.currentExam} examinations, questions on ${topic.name} typically focus on:</p>
            <ul>
                <li>Conceptual understanding of basic principles</li>
                <li>Application of knowledge to solve problems</li>
                <li>Analysis and interpretation of data or scenarios</li>
                <li>Integration with other related topics</li>
            </ul>
            
            <h4>Study Strategy</h4>
            <p>To excel in this topic:</p>
            <ul>
                <li>Build a strong foundation with basic concepts</li>
                <li>Practice numerical problems and analytical questions</li>
                <li>Study case studies and real-world applications</li>
                <li>Review previous years' questions and practice tests</li>
                <li>Connect concepts across different topics and subjects</li>
            </ul>
        `;
    }

    openModal(title) {
        const modal = document.getElementById('explanationModal');
        const overlay = document.getElementById('overlay');
        const modalTitle = document.getElementById('modalTitle');
        
        if (modalTitle) modalTitle.textContent = title;
        if (modal) modal.classList.remove('hidden');
        if (overlay) overlay.classList.remove('hidden');
        
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        const modal = document.getElementById('explanationModal');
        const overlay = document.getElementById('overlay');
        
        if (modal) modal.classList.add('hidden');
        if (overlay) overlay.classList.add('hidden');
        
        document.body.style.overflow = 'auto';
    }

    showModalLoading() {
        const modalLoading = document.getElementById('modalLoading');
        const modalContent = document.getElementById('modalContent');
        
        if (modalLoading) modalLoading.style.display = 'block';
        if (modalContent) modalContent.style.display = 'none';
    }

    showModalContent(content) {
        const modalLoading = document.getElementById('modalLoading');
        const modalContent = document.getElementById('modalContent');
        
        if (modalLoading) modalLoading.style.display = 'none';
        if (modalContent) {
            modalContent.style.display = 'block';
            modalContent.innerHTML = content;
        }
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new GateGsiApp();
});