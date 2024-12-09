const text = `
The Evolution of Education (EOE) is an interactive vertical timeline prototype that chronicles the journey of education, from its origins in oral traditions to futuristic scenarios influenced by artificial intelligence. By highlighting significant milestones throughout history, EOE emphasizes the transformative potential of AI in shaping the future of learning. Combining technology and art, the project invites users to engage with an interactive timeline that provides historical insights, forecasts future possibilities, and offers thought-provoking reflections on how AI can enhance educational efficiency, inclusivity, and accessibility. This prototype serves as a foundation for sparking meaningful conversations about the opportunities and challenges AI introduces into educational environments.

Purpose and Goals
     EOE aims to deliver a comprehensive overview of education's evolution while positioning AI as a transformative tool in modern learning. Through AI-generated visuals and descriptive milestones, the timeline captivates users and inspires curiosity and reflection. Significant moments in the history of education are highlighted alongside actionable insights into AI’s potential to address challenges such as equity, inclusivity, and accessibility. The project proposes innovative strategies for leveraging AI to benefit learners of all backgrounds, ensuring that education systems adapt to changing needs without losing their human-centric essence.

I. Power and Evolution of Education
Education is a transformative tool for individual and societal growth. Beyond imparting knowledge and skills, it fosters critical thinking, creativity, empathy, and adaptability. Education shapes character, opens opportunities, bridges socioeconomic divides, and cultivates leaders who drive positive social change. By exposing learners to diverse perspectives, it not only promotes equality and innovation but also prepares individuals to navigate a rapidly changing world and lead fulfilling lives. Education fuels economic development, breaks cycles of poverty, and encourages lifelong learning, enabling people to thrive and contribute to a more inclusive and equitable future.
The evolution of education reflects humanity’s pursuit of progress, adapting to societal needs and technological advancements. Early education relied on storytelling and apprenticeships, preserving knowledge through oral traditions. The advent of writing systems enabled structured teaching and record-keeping, laying the foundation for formal education. Religious institutions dominated learning in the Middle Ages, emphasizing rote memorization. Universities like Oxford and Bologna emerged, advancing higher education. The Renaissance and Enlightenment shifted focus to humanism, critical thinking, and the democratization of knowledge through innovations like the printing press and public schools. The Industrial Revolution standardized education to meet workforce demands, introducing tools like chalkboards and textbooks.
In the modern era, progressive philosophies and emerging technologies have revolutionized education. Tools like radios, projectors, and the internet have made learning more accessible and engaging. Today, artificial intelligence is reshaping education with personalized learning platforms, virtual classrooms, and immersive technologies like virtual and augmented reality. AI supports educators by automating administrative tasks and tailoring content to individual needs. However, ethical concerns such as data privacy, human connection, and equitable access highlight the need for careful implementation. While technology drives education forward, its essence remains rooted in human connection, creativity, and transformation.

II. Ethical Considerations of AI in Education
AI’s integration into education is reshaping how society learns, offering personalized learning experiences and identifying gaps in access. However, these tools also raise ethical concerns about privacy, data security, and bias, with the potential to deepen inequalities in underserved communities if left unchecked. To address these challenges, schools must incorporate AI literacy into curricula, empowering students and educators with critical thinking skills to evaluate AI’s benefits and limitations. By fostering transparency, equity, and ethical reasoning, education can responsibly integrate AI while preserving human connections and ensuring equitable access for all learners.
As automation replaces routine tasks like data processing, education must pivot to developing uniquely human skills such as creativity, critical thinking, and problem-solving. Updated curricula should emphasize interdisciplinary learning and collaboration with AI tools, preparing students to innovate and manage these systems effectively. By addressing disparities in technology access and promoting equitable benefits, education can harness AI’s potential to enhance learning while mitigating its risks, ensuring a future where technology complements rather than undermines the human essence of education.

III. Risks and AI Literacy
Model collapse, where reliance on AI-generated outputs degrades quality over time, poses significant risks in education. For example, students might submit AI-generated essays with inaccuracies, or teachers might create lesson plans with flawed information, perpetuating misinformation and undermining academic standards. This issue arises from AI systems relying on patterns in their training data, which may include biases or errors. Over-reliance on AI can erode critical thinking, as users fail to engage in the analytical processes needed to validate AI outputs, creating an illusion of productivity while compromising genuine learning.
To address these challenges, embedding AI literacy into education is essential. Teaching students and educators to evaluate AI critically ensures collaboration rather than dependence. Fact-checking AI outputs against credible sources fosters skepticism and academic integrity while understanding AI’s limitations enables responsible use. This approach preserves content quality, supports human-AI collaboration, and prepares future generations to use AI effectively, safeguarding the reliability of educational knowledge.

IV. Preserving Human Interaction in AI-Driven Education
To ensure AI enhances rather than replaces human interaction, a balance between AI and human contributions in education must be carefully maintained. While AI excels at automating administrative tasks and delivering personalized learning experiences, teaching is fundamentally about empathy, mentorship, and fostering emotional connections—qualities unique to humans. Schools should adopt AI as a supportive tool, enabling educators to focus on inspiring and guiding students while allowing technology to handle repetitive or logistical aspects of teaching.
In some cases, learning from AI can even surpass traditional methods, particularly when teachers fail to engage meaningfully with their students. For instance, many educators simply read off PowerPoints or manage classrooms without actively teaching. An AI system can offer a more structured, consistent, and interactive experience by providing tailored lessons, real-time feedback, and adaptive content. For a personal example, my high school computer science teacher acted more as a task manager, telling us what to do and assigning homework, while we learned the fundamentals of coding independently through an online curriculum. This was beneficial as students could follow their own pace while learning however, many were left confused or felt that they did not learn anything. In such cases, AI could effectively replace these passive teaching approaches, creating a more efficient and engaging learning experience.
This collaboration between AI and humans creates a synergistic relationship where both sides contribute their unique strengths. AI processes data efficiently, identifies learning gaps, and adapts to individual student needs, offering precise and scalable solutions. On the other hand, humans bring creativity, ethical reasoning, and the ability to nurture curiosity and critical thinking. Together, AI can deliver the technical foundation of learning, while educators provide the emotional support and mentorship essential for holistic growth. By embracing this balance, education becomes not only more efficient but also more human-centered, ensuring students are both intellectually and emotionally equipped for the future.

V. Why Interactive Timeline?
Creating an interactive timeline about education is a powerful way to explore its evolution, offering a dynamic and engaging approach to understanding how teaching methods, educational structures, and technological advancements have adapted to societal changes. Unlike static presentations, an interactive timeline allows users to actively engage with content, enhancing their retention of key milestones while providing a contextualized view of progress and challenges. By catering to diverse learning styles, this timeline makes education history more accessible and immersive. Visual learners benefit from chronological layouts, while kinesthetic learners enjoy engaging with multimedia elements like clickable nodes, videos, and audio clips. This interactive format also highlights connections between historical shifts and current trends, such as the rise of AI in education and the ongoing push for equitable access to resources, encouraging critical thinking about the future trajectory of learning.
AI’s role in predicting the future of education enhances this dynamic exploration by offering data-driven insights into emerging trends and challenges. By analyzing vast amounts of data, AI can forecast how students learn best, recommend personalized teaching methods, and anticipate the integration of new technologies like virtual and augmented reality in experiential learning. These predictions enable institutions to strategically address gaps in access, deploy AI-powered platforms in underserved regions, and adapt curriculums to prepare students for future demands. At the same time, AI predictions provide ethical and practical guidance on balancing technology’s benefits with the preservation of human interaction and creativity in education. By combining the contextual richness of interactive timelines with AI's predictive capabilities, educators and students can collaboratively shape an informed and inclusive future, fostering innovation while ensuring technological advancements complement human-centered learning. This approach underscores the importance of teaching AI literacy and critical thinking, empowering individuals to navigate and influence the evolving educational landscape responsibly.

`;

// Split text into paragraphs by detecting double newlines
const paragraphs = text.split('\n\n');
const typewriter = document.getElementById('about-text');
let paragraphIndex = 0;
let charIndex = 0;
let typingSpeed = 30; // Typing speed in milliseconds
let typingInterval;
let isTypingComplete = false;

// Function to display a paragraph fully
function displayParagraphInstantly() {
    paragraphs.forEach(paragraph => {
        const paragraphElem = document.createElement('p');
        paragraphElem.textContent = paragraph;
        typewriter.appendChild(paragraphElem);
    });
    clearInterval(typingInterval);
    isTypingComplete = true;
}

// Function for typewriter effect
function typeEffect() {
    if (paragraphIndex < paragraphs.length) {
        const paragraphElem = typewriter.lastElementChild || document.createElement('p');
        if (!typewriter.lastElementChild) typewriter.appendChild(paragraphElem);

        if (charIndex < paragraphs[paragraphIndex].length) {
            paragraphElem.textContent += paragraphs[paragraphIndex][charIndex];
            charIndex++;
        } else {
            charIndex = 0;
            paragraphIndex++;
        }
    } else {
        clearInterval(typingInterval);
        isTypingComplete = true;
    }
}

// Function to handle spacebar press
function handleSpacebar(event) {
    if (event.code === 'Space') {
        event.preventDefault(); // Prevent the default behavior
        if (!isTypingComplete) {
            displayParagraphInstantly(); // Show all paragraphs instantly
        }
    }
}

// Start the typewriter effect
function startTyping() {
    typingInterval = setInterval(typeEffect, typingSpeed);
}

// Attach event listener for the spacebar
document.addEventListener('keydown', handleSpacebar);

// Begin typing
startTyping();