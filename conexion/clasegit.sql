-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-01-2023 a las 19:39:59
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.0.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `clasegit`
--
CREATE DATABASE IF NOT EXISTS `clasegit` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `clasegit`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tablaprueba`
--

CREATE TABLE `tablaprueba` (
  `Id_Tab` int(5) NOT NULL,
  `Tab_Nom` varchar(50) DEFAULT NULL COMMENT 'nombre',
  `Tab_Usu` varchar(30) DEFAULT NULL COMMENT 'usuario',
  `Tab_Tel` int(10) DEFAULT NULL COMMENT 'telefono'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tablaprueba`
--
ALTER TABLE `tablaprueba`
  ADD PRIMARY KEY (`Id_Tab`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tablaprueba`
--
ALTER TABLE `tablaprueba`
  MODIFY `Id_Tab` int(5) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
