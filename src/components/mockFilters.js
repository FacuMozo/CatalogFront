const mockFilters = {
    subscription: { label: "Por Suscripción", count: 120 },
    miniCourses: { label: "Mini Cursos", count: 80 },
    categories: [
        { label: "Desarrollo web", count: 2 },
        { label: "Marketing Digital", count: 5 },
        { label: "Big data", count: 3 },
        { label: "Análisis de Datos", count: 1 },
        { label: "Ciencia de Datos", count: 7 },
        { label: "Inteligencia Artificial", count: 6 },
        { label: "Otros", count: 10 },
    ],
    companies: [
        { label: "Skillbox", count: 86 },
        { label: "GeekBrains", count: 45 },
        { label: "SkillFactory", count: 34 },
        { label: "Bang Bang Education", count: 29 },
        { label: "Coursera", count: 20 },
        { label: "edX", count: 18 },
        { label: "Udemy", count: 15 },
        { label: "Otros", count: 17 },
    ],
    priceRange: { min: 0, max: 16161 },
    free: { label: "Seleccionar Gratis", count: 5 },
};

export default mockFilters;
