-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 01, 2022 at 03:59 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `warehouse`
--

-- --------------------------------------------------------

--
-- Table structure for table `cities`
--

CREATE TABLE `cities` (
  `city_id` int(11) NOT NULL,
  `city` varchar(20) NOT NULL,
  `state` varchar(20) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cities`
--

INSERT INTO `cities` (`city_id`, `city`, `state`, `created_at`, `updated_at`) VALUES
(1, 'pune', 'maharashtra', '2022-11-29 02:40:27', '2022-11-29 02:40:27'),
(2, 'mumbai', 'maharashtra', '2022-11-29 02:40:27', '2022-11-29 02:40:27');

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `cno` int(11) NOT NULL,
  `cname` varchar(50) NOT NULL,
  `addr` varchar(50) NOT NULL,
  `cu_city` varchar(20) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`cno`, `cname`, `addr`, `cu_city`, `created_at`, `updated_at`) VALUES
(1, 'Omkar Randive', 'Pune', 'pune', '2022-11-29 03:11:23', '2022-11-29 03:11:23'),
(2, 'Mr. Patil', 'Pune', 'pune', '2022-11-29 03:11:23', '2022-11-29 03:11:23');

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

CREATE TABLE `items` (
  `itemno` int(11) NOT NULL,
  `item` varchar(20) NOT NULL,
  `ono` int(11) NOT NULL,
  `description` text NOT NULL,
  `weight` decimal(5,2) NOT NULL,
  `cost` decimal(5,2) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`itemno`, `item`, `ono`, `description`, `weight`, `cost`, `created_at`, `updated_at`) VALUES
(1, 'item1', 1, 'Item one Description', '10.00', '999.99', '2022-11-29 03:12:42', '2022-12-01 02:26:29'),
(2, 'item1', 2, 'Item two Description', '20.00', '100.00', '2022-11-29 03:12:56', '2022-12-01 02:54:21'),
(3, 'item2', 2, 'Item three Description', '20.00', '500.00', '2022-11-29 03:12:56', '2022-12-01 02:54:29');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `ono` int(11) NOT NULL,
  `cno` int(11) NOT NULL,
  `odate` date NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`ono`, `cno`, `odate`, `created_at`, `updated_at`) VALUES
(1, 1, '2022-11-29', '2022-11-29 03:12:10', '2022-11-29 03:12:10'),
(2, 2, '2022-11-29', '2022-11-29 03:12:10', '2022-11-29 03:12:10');

-- --------------------------------------------------------

--
-- Table structure for table `stores`
--

CREATE TABLE `stores` (
  `sid` int(11) NOT NULL,
  `wid` int(11) NOT NULL,
  `itemno` int(11) NOT NULL,
  `store_name` varchar(20) NOT NULL,
  `location_city` varchar(20) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `stores`
--

INSERT INTO `stores` (`sid`, `wid`, `itemno`, `store_name`, `location_city`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 'My Store', 'pune', '2022-11-29 03:13:51', '2022-11-29 03:13:51');

-- --------------------------------------------------------

--
-- Table structure for table `warehouses`
--

CREATE TABLE `warehouses` (
  `wid` int(11) NOT NULL,
  `city_idw` int(11) NOT NULL,
  `location` varchar(20) NOT NULL,
  `wname` varchar(30) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `warehouses`
--

INSERT INTO `warehouses` (`wid`, `city_idw`, `location`, `wname`, `created_at`, `updated_at`) VALUES
(1, 1, 'pune', 'pune-warehouse', '2022-11-29 02:39:56', '2022-11-29 02:39:56'),
(2, 2, 'pune', 'wagholi-warehouse', '2022-11-29 02:39:56', '2022-12-01 02:44:44'),
(11, 3, 'mumbai', 'panvel-warehouse', '2022-11-29 02:39:56', '2022-11-29 02:39:56'),
(12, 4, 'mumbai', 'panvel-warehouse', '2022-11-29 02:39:56', '2022-12-01 02:44:44'),
(13, 5, 'pune', 'hadapsar-warehouse', '2022-11-29 02:39:56', '2022-12-01 02:44:44');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cities`
--
ALTER TABLE `cities`
  ADD PRIMARY KEY (`city_id`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`cno`);

--
-- Indexes for table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`itemno`),
  ADD KEY `item-order-m-to-m` (`ono`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`ono`),
  ADD KEY `cno` (`cno`);

--
-- Indexes for table `stores`
--
ALTER TABLE `stores`
  ADD PRIMARY KEY (`sid`),
  ADD UNIQUE KEY `wid` (`wid`),
  ADD KEY `store-item-to-m-to-m` (`itemno`);

--
-- Indexes for table `warehouses`
--
ALTER TABLE `warehouses`
  ADD PRIMARY KEY (`wid`),
  ADD UNIQUE KEY `city_id` (`city_idw`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cities`
--
ALTER TABLE `cities`
  MODIFY `city_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `cno` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `items`
--
ALTER TABLE `items`
  MODIFY `itemno` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `ono` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `stores`
--
ALTER TABLE `stores`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `warehouses`
--
ALTER TABLE `warehouses`
  MODIFY `wid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cities`
--
ALTER TABLE `cities`
  ADD CONSTRAINT `city-warehouse-one-to-many` FOREIGN KEY (`city_id`) REFERENCES `warehouses` (`city_idw`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `items`
--
ALTER TABLE `items`
  ADD CONSTRAINT `item-order-m-to-m` FOREIGN KEY (`ono`) REFERENCES `orders` (`ono`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`cno`) REFERENCES `customer` (`cno`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `stores`
--
ALTER TABLE `stores`
  ADD CONSTRAINT `store-item-to-m-to-m` FOREIGN KEY (`itemno`) REFERENCES `items` (`itemno`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `warehouse-to-store-one-to-many` FOREIGN KEY (`wid`) REFERENCES `warehouses` (`wid`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
