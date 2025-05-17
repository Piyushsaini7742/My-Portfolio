import React from 'react';

const Experience = () => {
    return (
        <div className="bg-gray-800 text-white py-20 px-4 ">

            <h1 className="text-3xl font-bold text-center mb-8">Professional Experience</h1>

            <div className="flex justify-center gap-8">

                <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg max-w-sm">
                    <h2 className="text-xl font-bold mb-2">Full Stack Developer Intern</h2>
                    <p className="text-blue-400 mb-1">Kodu - powered by Dhurina - Sikar</p>
                    <p className="text-sm text-gray-400 mb-4">January 2025 - April 2025</p>
                    <p>
                        As a Full Stack Developer, I specialize in creating responsive, user-friendly interfaces using HTML, CSS, Node.js, Express, MongoDB and JavaScript. I focus on optimizing performance, ensuring cross-browser compatibility, and delivering seamless, visually appealing web experiences.
                    </p>
                </div>
                <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg max-w-sm">
                    <h2 className="text-xl font-bold mb-2">Web Development Intern</h2>
                    <p className="text-blue-400 mb-1">Delaine Technologies Pvt Ltd.</p>
                    <p className="text-sm text-gray-400 mb-4">May 2025 - Present</p>
                    <p>
                        Building responsive apps using React.js, Tailwind CSS, and JavaScript. <br />
                        Integrating REST APIs and enhancing UI/UX with cross-functional teams. <br />
                        Writing modular code, reviewing peers’ code, and using Git workflows. 
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Experience;