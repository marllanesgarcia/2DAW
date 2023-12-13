-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-12-2023 a las 14:41:41
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `phasmofobia`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `blog`
--

CREATE TABLE `blog` (
  `id` int(11) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `introduccion` text NOT NULL,
  `contenido` text NOT NULL,
  `nombre_categoria` varchar(255) DEFAULT NULL,
  `fecha_publicacion` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `blog`
--

INSERT INTO `blog` (`id`, `titulo`, `introduccion`, `contenido`, `nombre_categoria`, `fecha_publicacion`) VALUES
(12, 'Características Generales Fantasmas', 'Ataque y Cordura de los fantasmas en General', 'FANTASMAS QUE ATACAN AL 50%\r\nEspiritu, Espectro, Ente, Polter, Banshee(50% de su target), Jinn, Revenant, Yurei, Oni, Hantu, Goryo, Myling, Gemelos, Obake, Moroi.\r\n\r\nFANTASMAS QUE ATACAN A UNA CORDURA ESPECIFICA\r\nDemonio: 100% si utiliza su habilidad, 70% de normal. La posibilidad de caza después de un ataque es en 20 segundos un nuevo ataque en vez de en 25 como el resto de fantasmas. El incienso evita el ataque en 60 segundos en vez de lo normal que serian 90 segundos. Rango para comerse el crucifijo, mayor. El % de aceleración al ver a alguien es inferior al resto.\r\n\r\nOnryo: 100% si apaga alguna fuente de fuego, vela, mechero. 60% sin su habilidad.\r\n\r\nYokai: 80% si alguien habla cerca de su radio de ataque, 50% sin su habilidad.\r\n\r\nThaye: 75% si no ha envejecido nada, puede envejecer más de 10 veces, perdiendo % de ataque de cordura y de velocidad en cada ocasión. Hay que estar cerca de el cuando vaya a envejecer que lo suele hacer entre 1 y 2 minutos de tiempo. No tiene % de aceleración al ver a alguien.\r\n\r\nRaiju: 65% con 1 aparato electrónico. Sin objeto electrónico en su zona, 50%.\r\n\r\nPesadilla: 60% con luces apagadas, 40% con luces encendidas.\r\n\r\nMímico: dependiendo de a quien imite, desde esa cordura atacara. Sin habilidad atacara al 50% a no ser que imite un fantasma que ataque con un umbral mas bajo.\r\n\r\nDeogen: 40% . No tiene % de aceleración al ver a alguien.\r\n\r\nSombra: 35% de cordura, 0% posibilidad de hacer aparición con 100% de cordura, porcentaje mayor de que sus apariciones sean modo sombra.\r\n', '4', '2023-12-13 12:49:42'),
(13, 'Características Generales Fantasmas', 'Características Generales en cuando a Ataque y cordura espefícica', 'FANTASMAS QUE ATACAN AL 50%\r\nEspiritu, Espectro, Ente, Polter, Banshee(50% de su target), Jinn, Revenant, Yurei, Oni, Hantu, Goryo, Myling, Gemelos, Obake, Moroi.\r\n\r\nFANTASMAS QUE ATACAN A UNA CORDURA ESPECIFICA\r\nDemonio: 100% si utiliza su habilidad, 70% de normal. La posibilidad de caza después de un ataque es en 20 segundos un nuevo ataque en vez de en 25 como el resto de fantasmas. \r\nEl incienso evita el ataque en 60 segundos en vez de lo normal que serian 90 segundos. Rango para comerse el crucifijo, mayor. El % de aceleración al ver a alguien es inferior al resto.\r\n\r\nOnryo: 100% si apaga alguna fuente de fuego, vela, mechero. 60% sin su habilidad.\r\n\r\nYokai: 80% si alguien habla cerca de su radio de ataque, 50% sin su habilidad.\r\n\r\nThaye: 75% si no ha envejecido nada, puede envejecer más de 10 veces, perdiendo % de ataque de cordura y de velocidad en cada ocasión. Hay que estar cerca de el cuando vaya a envejecer que lo suele hacer entre 1 y 2 minutos de tiempo. No tiene % de aceleración al ver a alguien.\r\n\r\nRaiju: 65% con 1 aparato electrónico. Sin objeto electrónico en su zona, 50%.\r\n\r\nPesadilla: 60% con luces apagadas, 40% con luces encendidas.\r\n\r\nMímico: dependiendo de a quien imite, desde esa cordura atacara. Sin habilidad atacara al 50% a no ser que imite un fantasma que ataque con un umbral mas bajo.\r\n\r\nDeogen: 40% . No tiene % de aceleración al ver a alguien.\r\n\r\nSombra: 35% de cordura, 0% posibilidad de hacer aparición con 100% de cordura, porcentaje mayor de que sus apariciones sean modo sombra.', NULL, '2023-12-13 12:49:42'),
(14, 'Demonios', 'Los demonios son unos de los fantasmas más peligrosos del juego', 'Demonio: 100% si utiliza su habilidad, 70% de normal. La posibilidad de caza después de un ataque es en 20 segundos un nuevo ataque en vez de en 25 como el resto de fantasmas. El incienso evita el ataque en 60 segundos en vez de lo normal que serian 90 segundos. Rango para comerse el crucifijo, mayor. El % de aceleración al ver a alguien es inferior al resto', NULL, '2023-12-13 12:49:42'),
(15, 'banshee', 'aaaaaaaaaaaaaaaaaaaaaaaa', 'Identificar al jugador objetivo de un Banshee lo identifica de manera concluyente y puede proporcionar a los jugadores una ventaja significativa,\r\n como hacer que los objetivos relacionados con la caza sean mucho más fáciles y permitir que los otros jugadores continúen investigando durante \r\nlas cacerías con impunidad, aunque es importante tener en cuenta que el jugador objetivo debe estar dentro del área de investigación para que esto sea aplicable. \r\nHay varios métodos que los jugadores pueden utilizar para identificar el objetivo de una Banshee:\r\n\r\nLos Banshees solo comprobarán el nivel de cordura individual del jugador objetivo cuando intenten cazar. Si el fantasma caza por encima del 50% de cordura promedio \r\ny uno o más jugadores están por debajo del 50% de cordura, entonces uno de ellos es el objetivo. Del mismo modo, si el fantasma se abstiene \r\nde cazar con una cordura promedio inferior al 50%, pero un jugador tiene una cordura alta, se puede presumir que es el objetivo de Banshee.\r\nHacer que los jugadores actúen como \"cebo\" con incienso y/o rutas de escape listas puede identificar definitivamente al objetivo. \r\nLos jugadores de cebo deben permanecer a la vista e intentar atraer activamente al fantasma, como hablar por el micrófono o sostener dispositivos electrónicos activos; Si el fantasma los ignora, haga que otro jugador repita el proceso y luego proceda por eliminación hasta encontrar el objetivo. Alternativamente, varios jugadores pueden hacer esto a la vez, estando separados \r\nunos de otros y viendo hacia cuál de ellos se apresura Banshee. \r\nEste método, aunque más arriesgado, es útil cuando el método basado en la cordura no resulta concluyente o cuando se juega en dificultad Pesadilla/Locura \r\ndonde el Monitor de cordura no está disponible. Asegúrese de que todos los jugadores estén dentro del edificio al realizar esta prueba.\r\nLos banshees tienden a deambular hacia su objetivo fuera de la cacería; Lo más probable es que el objetivo sea un jugador que informe actividad \r\nfrecuente o incluso cacerías que comiencen cerca de él y lejos de la habitación fantasma. Usar sensores de movimiento y sal puede ayudar a rastrear la ubicación del fantasma.\r\nTenga en cuenta que si el jugador objetivo muere o se desconecta, se seleccionará un nuevo objetivo. Esto también se aplica en dificultad \r\nPesadilla/Locura o cuando la configuración \"Las muertes extienden la caza\" está activada: si Banshee logra matar a su objetivo, inmediatamente seleccionará a otro jugador y continuará cazando.\r\n\r\nEn un jugador, determinar el Banshee por su habilidad objetivo es imposible, lo que hace que sea mucho más difícil identificarlo solo a través \r\ndel comportamiento, por lo que uno debe confiar en otros posibles indicios o pruebas. Usar un micrófono parabólico para captar su vocalización única puede resultar útil, \r\naunque tenga en cuenta que Banshee solo tiene la posibilidad de producir su chillido, por lo que no debe descartarse simplemente porque solo se escucharon susurros varias veces seguidas. \r\nPrimero, comience a buscar un fantasma que cante en muchos eventos.', '1', '2023-12-13 12:49:42'),
(16, 'Joe el butanero', 'asdfasdfasdfsadfdsfasdfasdfsadfsadfsdfsd', 'ente de fuego, vela, mechero. 60% sin su habilidad.\r\n\r\nYokai: 80% si alguien habla cerca de su radio de ataque, 50% sin su habilidad.\r\n\r\nThaye: 75% si no ha envejecido nada, puede envejecer más de 10 veces, perdiendo % de ataque de cordura y de velocidad en cada ocasión. Hay que estar cerca de el cuando vaya a envejecer que lo suele hacer entre 1 y 2 minutos de tiempo. No tiene % de aceleración al ver a alguien.\r\n\r\nRaiju: 65% con 1 aparato electrónico. Sin objeto electrónico en su zona, 50%.\r\n\r\nPesadilla: 60% con luces apagadas, 40% con luces encendidas.\r\n\r\nMímico: dependiendo de a quien imite, desde esa cordura atacara. Sin habilidad atacara al 50% a no ser que imite un fantasma que ataque con un umbral mas bajo.\r\n', '5', '2023-12-13 12:49:42'),
(17, 'Deogen', 'El deogen es un fantasma de los más lentos y faciles', 'Ataca al  40% . No tiene % de aceleración al ver a alguien. Puedes franquearle y pasar de él para que no te mate sin ningún tipo de complicación', '1', '2023-12-13 12:49:42'),
(18, 'Sombra', 'El fantasma más aburrido del juego', 'El sombra se trata de un fantasma que hace muy pocas interacciones y a penas da evidencias. Ataca al 35% de cordura, 0% posibilidad de hacer aparición con 100% de cordura, porcentaje mayor de que sus apariciones sean modo sombra.', '3', '2023-12-13 12:49:42'),
(19, 'Raiju', 'Fantasma electronico', 'Este fantasma de caracteriza en que, cuantos más elementos electronicos haya, más rápido va a ir y atacar. \r\n 65% con 1 aparato electrónico. Sin objeto electrónico en su zona, 50%', '1', '2023-12-09 23:00:00');

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
(1, 'fantasmas'),
(2, 'armas'),
(3, 'curiosidades'),
(4, 'informacion general'),
(5, 'trampas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `usuario` varchar(50) NOT NULL,
  `contrasena` varchar(255) NOT NULL,
  `rol` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `contrasena`, `rol`) VALUES
(1, 'mar', '$2y$10$S2W6ebhtfAex2wfOrZw0m.kb6A0.OYqdIEPBUM16TwoUBb5SNYJya', 'administrador'),
(2, 'gato', '123456', 'administrador'),
(3, 'pepe', 'holawenastardes', 'administrador'),
(4, 'cat', 'holapepe', 'administrador'),
(5, 'beo', 'cheeto', 'usuario'),
(6, 'gato', '1234', 'administrador');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `blog`
--
ALTER TABLE `blog`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
