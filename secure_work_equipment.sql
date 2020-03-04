-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 04, 2020 at 01:04 PM
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
-- Table structure for table `calendar_notes`
--

CREATE TABLE `calendar_notes` (
  `cn_id` int(11) NOT NULL,
  `cn_date` date NOT NULL,
  `cn_time` time NOT NULL,
  `cn_notes` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `calendar_notes`
--

INSERT INTO `calendar_notes` (`cn_id`, `cn_date`, `cn_time`, `cn_notes`) VALUES
(1, '2020-03-02', '09:00:00', 'บันทึกความทรงจำ'),
(2, '2020-03-05', '12:20:00', 'บันทึกความทรงจำใหม่'),
(4, '2020-03-13', '12:12:00', 'บันทึกรายละเอียด'),
(5, '2020-03-03', '12:22:00', 'บันทึกรายละเอียด'),
(6, '2020-03-07', '12:12:00', 'บันทึกรายละเอียด'),
(7, '2020-03-08', '12:12:00', 'บันทึกรายละเอียด'),
(8, '2020-03-10', '12:12:00', 'บันทึกรายละเอียด'),
(10, '2020-03-12', '12:12:00', 'บันทึกรายละเอียด'),
(11, '2020-04-02', '11:11:00', 'บันทึกรายละเอียด'),
(13, '2020-03-19', '11:11:00', 'บันทึกรายละเอียด'),
(14, '2020-04-11', '22:02:00', 'บันทึกรายละเอียด'),
(15, '2020-04-06', '22:22:00', 'บันทึกรายละเอียด'),
(16, '2020-04-07', '22:22:00', 'บันทึกรายละเอียด'),
(17, '2020-04-08', '12:02:00', 'บันทึกรายละเอียด'),
(18, '2020-04-09', '22:02:00', 'บันทึกรายละเอียด'),
(19, '2020-04-10', '11:11:00', 'บันทึกรายละเอียด'),
(20, '2020-03-09', '07:59:00', 'บันทึกรายละเอียด');

-- --------------------------------------------------------

--
-- Table structure for table `item_store`
--

CREATE TABLE `item_store` (
  `item_id` int(11) NOT NULL,
  `item_name` varchar(125) NOT NULL,
  `item_series_number` varchar(30) NOT NULL,
  `item_type` varchar(125) NOT NULL,
  `item_date_of_birth` date NOT NULL,
  `item_image` varchar(125) NOT NULL,
  `item_place_of_birth` varchar(45) NOT NULL,
  `item_brand` varchar(125) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `item_gen` varchar(125) NOT NULL,
  `item_status` int(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `item_store`
--

INSERT INTO `item_store` (`item_id`, `item_name`, `item_series_number`, `item_type`, `item_date_of_birth`, `item_image`, `item_place_of_birth`, `item_brand`, `item_gen`, `item_status`) VALUES
(4, 'CB-3304-21I', '452138tf', 'IP Fixed Camera', '2020-02-28', 'item/image/default.png', 'FLIR USA', '', '', 2),
(5, 'CB-3102-11-I', '45789512', 'IP Fixed Camera', '2020-02-28', 'item/image/default.png', 'USA', '', '', 1),
(6, 'CM-3102-11-I', '1234568', 'IP Fixed Dome Camera', '2020-02-28', 'item/image/item_6.png', 'USA', '', '', 1),
(7, 'FLIR PT-612 HD', '456785', 'IP PTZ Long Range Thermal Camera', '2020-02-28', 'item/image/item_7.png', 'USA', '', '', 3),
(9, 'PTZ10W', '45789512', 'IP PTZ Long Range Thermal Camera', '2020-03-03', 'item/image/item_9.png', 'USA', 'FLIR', 'PT-612 HD', 1);

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
-- AUTO_INCREMENT for table `calendar_notes`
--
ALTER TABLE `calendar_notes`
  MODIFY `cn_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `item_store`
--
ALTER TABLE `item_store`
  MODIFY `item_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `typename`
--
ALTER TABLE `typename`
  MODIFY `TN_id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
