-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 30-11-2023 a las 12:48:13
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tienda`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id`, `nombre`) VALUES
(1, 'Electrónicos'),
(2, 'Friki'),
(3, 'Maquilaje'),
(4, 'Ropa'),
(5, 'Deporte'),
(6, 'Muebles'),
(7, 'Anime'),
(8, 'Accesorios');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compras`
--

CREATE TABLE `compras` (
  `id` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `cantidad` int(10) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_producto` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `id` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `descripcion` varchar(500) NOT NULL,
  `precio` double NOT NULL,
  `destacado` tinyint(1) NOT NULL,
  `id_categoria` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`id`, `nombre`, `descripcion`, `precio`, `destacado`, `id_categoria`) VALUES
(0, 'Camiseta Roja', 'Camiseta de algodón roja con diseño moderno', 19.99, 1, 4),
(1, 'Zapatos Deportivos', 'Zapatos para correr con tecnología avanzada', 49.99, 1, 5),
(2, 'Portátil', 'Portátil ligero y potente para productividad', 899.99, 1, 1),
(3, 'Reloj Inteligente', 'Reloj con funciones inteligentes y monitor de salud', 79.99, 0, 8),
(4, 'Silla gamer', 'Silla ajustable para mayor comodidad en el trabajo', 149.99, 1, 7),
(5, 'Gafas de Sol', 'Gafas de sol con estilo y protección UV', 29.99, 0, 8),
(6, 'Camiseta Friki', 'Camiseta de Star Wars de algodon', 39.99, 1, 7),
(7, 'Cámara de Fotos', 'Cámara con sensor avanzado y capacidad de grabación 4K', 599.99, 1, 6),
(8, 'Teclado Gaming', 'Teclado diseñado para jugadores con retroiluminación RGB', 89.99, 1, 6),
(9, 'Smart TV 4K', 'Televisor inteligente con resolución 4K y aplicaciones integradas', 499.99, 1, 1),
(10, 'Auriculares Inalámbricos', 'Auriculares con cancelación de ruido y conectividad Bluetooth', 129.99, 0, 1),
(11, 'Pintalabios', 'Pintalabios de Color Rojo Pasion de la marca Jeje', 29.99, 0, 3),
(12, 'Juego de Tazas de Café', 'Conjunto de tazas elegantes para disfrutar del café', 19.99, 0, 6),
(13, 'Figurita de Cyberpunk', 'Figura de la serie Cyberpunk Netflix', 349.99, 1, 7),
(14, 'Figurita de Kimetsu no Yaiba', 'Figura de Mitsuri de Kimetsu no Yaiba', 129.99, 1, 7);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `password`) VALUES
(1, 'jeje', '12'),
(2, 'pepe', 'pepe1'),
(3, 'pacorro', 'jajaja1234'),
(12, 'a', 'a'),
(13, 'a', 'a');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `compras`
--
ALTER TABLE `compras`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_categoria` (`id_categoria`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `producto`
--
ALTER TABLE `producto`
  ADD CONSTRAINT `fk_categoria` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
