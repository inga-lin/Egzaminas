-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 27, 2022 at 12:09 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.0.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `egzaminas`
--

-- --------------------------------------------------------

--
-- Table structure for table `knygos`
--

CREATE TABLE `knygos` (
  `id` int(11) NOT NULL,
  `vartotojas_id` int(10) UNSIGNED NOT NULL,
  `vvardas` varchar(50) NOT NULL,
  `tipas` tinyint(3) UNSIGNED NOT NULL,
  `knyga` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `knygos`
--

INSERT INTO `knygos` (`id`, `vartotojas_id`, `vvardas`, `tipas`, `knyga`) VALUES
(7, 0, 'Petras', 2, 'Jono pasaka'),
(8, 0, 'jonas', 2, 'serlokas'),
(9, 0, 'Domas', 1, 'Lauko gele'),
(10, 0, 'Kamile', 3, 'Tarp debesu'),
(11, 0, 'Inga', 1, 'Pavasaris arteja');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `pass` char(32) NOT NULL,
  `session` char(36) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `pass`, `session`) VALUES
(1, 'bebras', '202cb962ac59075b964b07152d234b70', '620b36f9-bc71-4391-901a-c80402f3d869'),
(2, 'nebebras', 'caf1a3dfb505ffed0d024130f58c5cfa', 'd7fff40f-87ce-418b-a533-1e43987d9af8'),
(3, 'inga', '7ff8d6b8a2885c82c68a7ffabdd05361', 'b3d50777-068c-45bb-9531-039669922ba9');

-- --------------------------------------------------------

--
-- Table structure for table `vartotojas`
--

CREATE TABLE `vartotojas` (
  `id` int(10) UNSIGNED NOT NULL,
  `vardas` varchar(50) NOT NULL,
  `rezervuoti` varchar(20) NOT NULL,
  `pratesti` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `vartotojas`
--

INSERT INTO `vartotojas` (`id`, `vardas`, `rezervuoti`, `pratesti`) VALUES
(1, 'Renata', '2022-02-21', 0),
(2, 'Renata', '2022-02-21', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `knygos`
--
ALTER TABLE `knygos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `vartotojas_id` (`vartotojas_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vartotojas`
--
ALTER TABLE `vartotojas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `knygos`
--
ALTER TABLE `knygos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `vartotojas`
--
ALTER TABLE `vartotojas`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
