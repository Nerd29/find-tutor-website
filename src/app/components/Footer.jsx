import React from 'react';

const Footer = () => {
     return (
        <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <span className="text-2xl font-black tracking-tighter text-blue-600">MediQueue</span>
                        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">© 2026 MediQueue Inc. All rights reserved.</p>
                    </div>

                    <div className="flex items-center gap-8 text-sm font-bold text-slate-600 dark:text-slate-400">
                        <a
                            href="#"
                            className="hover:text-blue-600 transition-colors"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#"
                            className="hover:text-blue-600 transition-colors"
                        >
                            Terms of Service
                        </a>
                        <a
                            href="#"
                            className="hover:text-blue-600 transition-colors"
                        >
                            Contact Support
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;