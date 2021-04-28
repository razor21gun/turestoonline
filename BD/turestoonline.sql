-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-04-2021 a las 23:16:22
-- Versión del servidor: 10.4.13-MariaDB
-- Versión de PHP: 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `turestoonline`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `ID_Categoria` int(11) NOT NULL,
  `Categoria` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `Activo` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`ID_Categoria`, `Categoria`, `Activo`) VALUES
(23, 'Milanesas', 1),
(24, 'Pizzas', 1),
(25, 'Empanadas', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria_imagen`
--

CREATE TABLE `categoria_imagen` (
  `ID_CategoriaImagen` int(11) NOT NULL,
  `FK_ID_categoria` int(11) NOT NULL,
  `UID` varchar(45) CHARACTER SET utf32 COLLATE utf32_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `categoria_imagen`
--

INSERT INTO `categoria_imagen` (`ID_CategoriaImagen`, `FK_ID_categoria`, `UID`) VALUES
(8, 23, '32190821-f213-4df9-8c25-fee4e425a155.jpeg'),
(9, 24, '66949661-ab29-4af1-9bbd-f1b9e9e5260b.jpeg'),
(10, 25, '375fe122-33d4-422d-b3b9-6fb6f6c895f5.jpeg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estado_pedido`
--

CREATE TABLE `estado_pedido` (
  `ID_EstadoPedido` int(11) NOT NULL,
  `EstadoPedido` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `Activo` tinyint(1) NOT NULL,
  `Descripcion` varchar(255) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `estado_pedido`
--

INSERT INTO `estado_pedido` (`ID_EstadoPedido`, `EstadoPedido`, `Activo`, `Descripcion`) VALUES
(1, 'Pendiente', 1, 'Pendiente de procesar'),
(2, 'En preparacion', 1, 'Nuestros CHeff estan preparando el pedido'),
(3, 'Listo para Retirar', 1, 'Listo para que lo retire.'),
(4, 'Entregado', 1, 'Su pedido fue entregado con exito.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `forma_pago`
--

CREATE TABLE `forma_pago` (
  `ID_FormaPago` int(11) NOT NULL,
  `FormaPago` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `Activo` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `forma_pago`
--

INSERT INTO `forma_pago` (`ID_FormaPago`, `FormaPago`, `Activo`) VALUES
(1, 'Efectivo', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedido`
--

CREATE TABLE `pedido` (
  `ID_Pedido` int(11) NOT NULL,
  `Fecha` datetime NOT NULL,
  `FK_ID_Usuario` int(11) NOT NULL,
  `TotalPedido` decimal(10,2) NOT NULL,
  `DireccionEnvio` varchar(150) COLLATE utf8_spanish_ci NOT NULL,
  `FK_ID_FormaPago` int(11) NOT NULL,
  `Comentario` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `FK_ID_TipoEntrega` int(11) NOT NULL,
  `FK_ID_EstadoPedido` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedido_producto`
--

CREATE TABLE `pedido_producto` (
  `FK_ID_Pedido` int(11) NOT NULL,
  `FK_ID_Producto` int(11) NOT NULL,
  `Precio_Actual` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `ID_Producto` int(11) NOT NULL,
  `Producto` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `Precio` decimal(10,2) NOT NULL,
  `Descripcion` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `FK_ID_Categoria` int(11) NOT NULL,
  `Activo` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`ID_Producto`, `Producto`, `Precio`, `Descripcion`, `FK_ID_Categoria`, `Activo`) VALUES
(6, 'Milaneza Napolitana', '850.00', 'Milaneza Napolitana con mucho tomate', 23, 1),
(7, 'Pizza Napolitana', '1050.00', 'Pizza Napolitana con bastante tomate', 24, 1),
(8, 'Pizza Calabresa', '980.00', 'Pizza Calabresa con mucho cantimpalo', 24, 1),
(9, 'Piiza Muzzarella', '750.00', 'Piiza Muzzarella con la mejor muzzarella', 24, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto_imagen`
--

CREATE TABLE `producto_imagen` (
  `ID_ProductoImagen` int(11) NOT NULL,
  `FK_ID_Producto` int(11) NOT NULL,
  `UID` varchar(45) CHARACTER SET utf32 COLLATE utf32_spanish2_ci NOT NULL COMMENT 'referencia de la imagen',
  `TS_Create` datetime NOT NULL DEFAULT current_timestamp(),
  `TS_Update` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `producto_imagen`
--

INSERT INTO `producto_imagen` (`ID_ProductoImagen`, `FK_ID_Producto`, `UID`, `TS_Create`, `TS_Update`) VALUES
(4, 6, 'cdd47466-0d80-4a7e-b2ff-a91cb21773d6.jpeg', '2021-04-28 06:35:54', '2021-04-28 06:35:54'),
(5, 7, 'cfc80a55-b60c-4d9e-a2d9-6a99a1655cbb.jpeg', '2021-04-28 06:41:27', '2021-04-28 06:41:27'),
(6, 8, '0e6abffb-2d11-442c-9917-f51bcdab2d39.jpeg', '2021-04-28 06:42:26', '2021-04-28 06:42:26'),
(7, 9, 'c90f68c5-cda6-4948-8c16-ff033709f1f7.jpeg', '2021-04-28 06:43:15', '2021-04-28 06:43:15');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_entrega`
--

CREATE TABLE `tipo_entrega` (
  `ID_TipoEntrega` int(11) NOT NULL,
  `TipoEntrega` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `Activo` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `tipo_entrega`
--

INSERT INTO `tipo_entrega` (`ID_TipoEntrega`, `TipoEntrega`, `Activo`) VALUES
(1, 'Take Away', 1),
(2, 'A Domicilio', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `ID_Usuario` int(11) NOT NULL,
  `Email` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `Nombre` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `Apellido` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `Activo` tinyint(1) NOT NULL,
  `Admin` tinyint(1) NOT NULL,
  `UserName` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `Password` varchar(255) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`ID_Usuario`, `Email`, `Nombre`, `Apellido`, `Activo`, `Admin`, `UserName`, `Password`) VALUES
(4, 'veroo.rms@gmail.com', 'Admin', 'Admin', 1, 0, 'admin', '7c222fb2927d828af22f592134e8932480637c0d');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`ID_Categoria`);

--
-- Indices de la tabla `categoria_imagen`
--
ALTER TABLE `categoria_imagen`
  ADD PRIMARY KEY (`ID_CategoriaImagen`),
  ADD KEY `FK_ID_categoria` (`FK_ID_categoria`);

--
-- Indices de la tabla `estado_pedido`
--
ALTER TABLE `estado_pedido`
  ADD PRIMARY KEY (`ID_EstadoPedido`);

--
-- Indices de la tabla `forma_pago`
--
ALTER TABLE `forma_pago`
  ADD PRIMARY KEY (`ID_FormaPago`);

--
-- Indices de la tabla `pedido`
--
ALTER TABLE `pedido`
  ADD PRIMARY KEY (`ID_Pedido`),
  ADD KEY `FK_ID_Usuario` (`FK_ID_Usuario`),
  ADD KEY `FK_ID_FormaPago` (`FK_ID_FormaPago`),
  ADD KEY `FK_ID_TipoEntrega` (`FK_ID_TipoEntrega`),
  ADD KEY `FK_ID_EstadoPedido` (`FK_ID_EstadoPedido`);

--
-- Indices de la tabla `pedido_producto`
--
ALTER TABLE `pedido_producto`
  ADD KEY `FK_ID_Pedido` (`FK_ID_Pedido`),
  ADD KEY `FK_ID_Producto` (`FK_ID_Producto`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`ID_Producto`),
  ADD KEY `FK_ID_Categoria` (`FK_ID_Categoria`);

--
-- Indices de la tabla `producto_imagen`
--
ALTER TABLE `producto_imagen`
  ADD PRIMARY KEY (`ID_ProductoImagen`),
  ADD KEY `FK_ID_Producto` (`FK_ID_Producto`);

--
-- Indices de la tabla `tipo_entrega`
--
ALTER TABLE `tipo_entrega`
  ADD PRIMARY KEY (`ID_TipoEntrega`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`ID_Usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `ID_Categoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de la tabla `categoria_imagen`
--
ALTER TABLE `categoria_imagen`
  MODIFY `ID_CategoriaImagen` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `estado_pedido`
--
ALTER TABLE `estado_pedido`
  MODIFY `ID_EstadoPedido` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `forma_pago`
--
ALTER TABLE `forma_pago`
  MODIFY `ID_FormaPago` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `pedido`
--
ALTER TABLE `pedido`
  MODIFY `ID_Pedido` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `ID_Producto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `producto_imagen`
--
ALTER TABLE `producto_imagen`
  MODIFY `ID_ProductoImagen` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `tipo_entrega`
--
ALTER TABLE `tipo_entrega`
  MODIFY `ID_TipoEntrega` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `ID_Usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `categoria_imagen`
--
ALTER TABLE `categoria_imagen`
  ADD CONSTRAINT `categoria_imagen_ibfk_1` FOREIGN KEY (`FK_ID_categoria`) REFERENCES `categoria` (`ID_Categoria`);

--
-- Filtros para la tabla `pedido`
--
ALTER TABLE `pedido`
  ADD CONSTRAINT `FK_ID_EstadoPedido` FOREIGN KEY (`FK_ID_EstadoPedido`) REFERENCES `estado_pedido` (`ID_EstadoPedido`),
  ADD CONSTRAINT `FK_ID_FormaPago` FOREIGN KEY (`FK_ID_FormaPago`) REFERENCES `forma_pago` (`ID_FormaPago`),
  ADD CONSTRAINT `FK_ID_TipoEntrega` FOREIGN KEY (`FK_ID_TipoEntrega`) REFERENCES `tipo_entrega` (`ID_TipoEntrega`),
  ADD CONSTRAINT `FK_ID_Usuario` FOREIGN KEY (`FK_ID_Usuario`) REFERENCES `usuario` (`ID_Usuario`);

--
-- Filtros para la tabla `pedido_producto`
--
ALTER TABLE `pedido_producto`
  ADD CONSTRAINT `FK_ID_Pedido` FOREIGN KEY (`FK_ID_Pedido`) REFERENCES `pedido` (`ID_Pedido`),
  ADD CONSTRAINT `FK_ID_Producto` FOREIGN KEY (`FK_ID_Producto`) REFERENCES `producto` (`ID_Producto`);

--
-- Filtros para la tabla `producto`
--
ALTER TABLE `producto`
  ADD CONSTRAINT `FK_ID_Categoria` FOREIGN KEY (`FK_ID_Categoria`) REFERENCES `categoria` (`ID_Categoria`);

--
-- Filtros para la tabla `producto_imagen`
--
ALTER TABLE `producto_imagen`
  ADD CONSTRAINT `producto_imagen_ibfk_1` FOREIGN KEY (`FK_ID_Producto`) REFERENCES `producto` (`ID_Producto`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
