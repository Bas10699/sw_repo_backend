-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 13, 2020 at 09:18 AM
-- Server version: 8.0.17
-- PHP Version: 7.2.23RC1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `secure_work_equipment`
--

-- --------------------------------------------------------

--
-- Table structure for table `airport`
--

CREATE TABLE `airport` (
  `ap_id` int(11) NOT NULL,
  `ap_name` varchar(125) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `calendar_notes`
--

CREATE TABLE `calendar_notes` (
  `cn_id` int(11) NOT NULL,
  `cn_date` date NOT NULL,
  `cn_time` time NOT NULL,
  `cn_notes` longtext NOT NULL,
  `cn_color` int(11) NOT NULL DEFAULT '0',
  `cn_head` varchar(45) NOT NULL,
  `cn_item_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `item_store`
--

CREATE TABLE `item_store` (
  `item_id` int(11) NOT NULL,
  `item_name` varchar(125) NOT NULL,
  `item_series_number` varchar(30) NOT NULL,
  `item_date_of_birth` date NOT NULL,
  `item_image` varchar(125) NOT NULL,
  `item_place_of_birth` varchar(45) NOT NULL,
  `item_brand` varchar(125) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `item_gen` varchar(125) NOT NULL,
  `item_status` int(45) NOT NULL,
  `item_type` int(11) NOT NULL,
  `item_airport` int(11) NOT NULL,
  `item_airport_date` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `typename`
--

CREATE TABLE `typename` (
  `TN_id` int(11) NOT NULL,
  `TN_name` varchar(45) NOT NULL,
  `TN_date_add` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `airport`
--
ALTER TABLE `airport`
  ADD PRIMARY KEY (`ap_id`);

--
-- Indexes for table `calendar_notes`
--
ALTER TABLE `calendar_notes`
  ADD PRIMARY KEY (`cn_id`);

--
-- Indexes for table `item_store`
--
ALTER TABLE `item_store`
  ADD PRIMARY KEY (`item_id`);

--
-- Indexes for table `typename`
--
ALTER TABLE `typename`
  ADD PRIMARY KEY (`TN_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `airport`
--
ALTER TABLE `airport`
  MODIFY `ap_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `calendar_notes`
--
ALTER TABLE `calendar_notes`
  MODIFY `cn_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `item_store`
--
ALTER TABLE `item_store`
  MODIFY `item_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `typename`
--
ALTER TABLE `typename`
  MODIFY `TN_id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
