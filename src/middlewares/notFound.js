const notFound = (req, res, next) => {
    res.status(404).json({ msg: 'Ruta no encontrada' });
};

export default notFound;