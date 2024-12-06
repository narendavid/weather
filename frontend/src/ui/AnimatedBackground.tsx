const AnimatedBackground = () => {
    return (
        <div className="relative min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 animate-gradient-x">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 text-white p-8">
                <h1 className="text-4xl font-bold">Bienvenido a mi app</h1>
                <p className="mt-2">Este es un fondo animado usando React y Tailwind CSS.</p>
            </div>
        </div>
    );
};

export default AnimatedBackground;
