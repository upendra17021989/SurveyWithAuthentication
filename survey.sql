-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 26, 2018 at 04:29 PM
-- Server version: 10.1.35-MariaDB
-- PHP Version: 7.2.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `survey`
--

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE `company` (
  `company_id` int(10) NOT NULL,
  `company_name` varchar(500) NOT NULL,
  `address` varchar(1000) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`company_id`, `company_name`, `address`, `created_at`, `updated_at`) VALUES
(2, 'ddd', 'dddd', '2018-09-25 15:11:13', '2018-09-26 12:02:50'),
(3, 'ABC Consult', 'Chennai', '2018-09-26 11:56:22', '2018-09-26 12:43:55'),
(4, 'asdas', 'dasd', '2018-09-26 11:59:36', '2018-09-26 11:59:36'),
(5, 'Ankit Pvt. Ltd.', 'Gmail', '2018-09-26 10:00:54', '2018-09-26 12:36:21'),
(6, 'Jayehs Enterprises', 'Mumbai', '2018-09-26 10:01:27', '2018-09-26 10:01:27');

-- --------------------------------------------------------

--
-- Table structure for table `company_survey`
--

CREATE TABLE `company_survey` (
  `company_id` int(5) NOT NULL,
  `survey_id` int(10) NOT NULL,
  `form_id` int(10) NOT NULL,
  `start_dt` date NOT NULL,
  `end_dt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `forms`
--

CREATE TABLE `forms` (
  `form_id` int(10) NOT NULL,
  `form_type` varchar(50) NOT NULL,
  `form_description` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2018_09_21_045628_create_survey_table', 1),
(2, '2018_09_21_072603_create_surveys_table', 2),
(3, '2014_10_12_000000_create_users_table', 3),
(4, '2014_10_12_100000_create_password_resets_table', 3);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `password_resets`
--

INSERT INTO `password_resets` (`email`, `token`, `created_at`) VALUES
('ups12384@gmail.com', '$2y$10$lOU1.KDeWoFs47wSpK8ZDed9LAjjz1cgZ/i/93BlW5MmNKd25tuGK', '2018-09-22 05:32:44');

-- --------------------------------------------------------

--
-- Table structure for table `survey`
--

CREATE TABLE `survey` (
  `survey_id` int(5) NOT NULL,
  `survey_type` varchar(50) NOT NULL,
  `description` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `survey_option`
--

CREATE TABLE `survey_option` (
  `question_id` int(11) NOT NULL,
  `option_id` int(5) NOT NULL,
  `description` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `survey_option`
--

INSERT INTO `survey_option` (`question_id`, `option_id`, `description`) VALUES
(1, 1, 'Superior'),
(1, 2, 'Very Satisfactory '),
(1, 3, '  \r\nAbout Average'),
(1, 4, 'Somewhat Unsatisfactory'),
(1, 5, 'Very Poor'),
(2, 1, 'Very Unsatisfactory '),
(2, 2, 'Somewhat Unsatisfactory '),
(2, 3, 'About Average '),
(2, 4, 'Somewhat Satisfactory '),
(2, 5, '  \r\nVery Satisfactory'),
(3, 1, 'Very Unsatisfactory'),
(3, 2, 'Somewhat Unsatisfactory'),
(3, 3, 'About Average'),
(3, 4, 'Somewhat Satisfactory'),
(3, 5, ' \r\nVery Satisfactory');

-- --------------------------------------------------------

--
-- Table structure for table `survey_question`
--

CREATE TABLE `survey_question` (
  `id` int(5) NOT NULL,
  `description` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `survey_question`
--

INSERT INTO `survey_question` (`id`, `description`) VALUES
(1, '\r\n  \r\n \r\nIn thinking about your most recent experience with [COMPANY], how was the quality of customer service you received?'),
(2, 'The process for getting your concerns resolved was: '),
(3, 'Now please think about the features and benefits of the [PRODUCT] itself. How satisfied are you with the [PRODUCT]:');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_type` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'respondent',
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `user_type`, `email`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Upendra', 'admin', 'ups12384@gmail.com', '$2y$10$.f1lYp1vIWtL/pyDZ09kkOkPsKykx/6y6nemA.4Bz/YRizebJy1Ru', NULL, '2018-09-22 05:31:18', '2018-09-22 05:31:18'),
(2, 'Jayesh Ingle', 'respondent', 'abc@gmail.com', '$2y$10$1V4yOkrQbwAN2bUm6hAInOMYfTApHORNRW135ZE1ldtn9a7eYaUb.', NULL, '2018-09-22 06:12:56', '2018-09-22 06:12:56');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`company_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `company`
--
ALTER TABLE `company`
  MODIFY `company_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
