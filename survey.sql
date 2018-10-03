-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 03, 2018 at 07:20 AM
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
(15, 'Jayesh Enterprises', 'Ahmedabad', '2018-09-27 07:14:22', '2018-09-27 11:48:52'),
(18, 'Gaurav Pvt. ltd.', 'Ahmedabad', '2018-09-27 07:16:45', '2018-09-27 07:16:55');

-- --------------------------------------------------------

--
-- Table structure for table `company_survey`
--

CREATE TABLE `company_survey` (
  `survey_id` int(11) NOT NULL,
  `company_id` int(5) NOT NULL,
  `form_id` int(10) NOT NULL,
  `survey_name` varchar(200) NOT NULL,
  `start_dt` date NOT NULL,
  `end_dt` date NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `company_survey`
--

INSERT INTO `company_survey` (`survey_id`, `company_id`, `form_id`, `survey_name`, `start_dt`, `end_dt`, `created_at`, `updated_at`) VALUES
(1, 15, 5, 'Customer Satisfaction Survey', '2018-09-19', '2018-09-23', '2018-10-01 07:58:20', '2018-10-01 11:55:55'),
(2, 15, 4, 'Dhaval', '2018-09-11', '2018-09-11', '2018-10-01 07:59:46', '2018-10-01 11:02:38');

-- --------------------------------------------------------

--
-- Table structure for table `forms`
--

CREATE TABLE `forms` (
  `form_id` int(10) NOT NULL,
  `form_name` varchar(50) NOT NULL,
  `form_description` varchar(200) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `forms`
--

INSERT INTO `forms` (`form_id`, `form_name`, `form_description`, `created_at`, `updated_at`) VALUES
(4, 'Form1', 'regional', '2018-09-28 14:44:08', '2018-09-28 14:44:08'),
(5, 'Form2', 'Still working on it.', '2018-10-01 04:32:14', '2018-10-01 04:32:14');

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
-- Table structure for table `options`
--

CREATE TABLE `options` (
  `form_id` int(11) NOT NULL,
  `question_id` int(11) NOT NULL,
  `option_id` int(11) NOT NULL,
  `option_description` varchar(500) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `options`
--

INSERT INTO `options` (`form_id`, `question_id`, `option_id`, `option_description`, `created_at`, `updated_at`) VALUES
(2, 6, 1, 'sadasd', '2018-09-28 14:17:26', '2018-09-28 14:17:26'),
(2, 6, 2, 'gffd  fg', '2018-09-28 14:21:46', '2018-09-28 14:21:46'),
(2, 2, 4, 'dhaval1', '2018-09-28 14:22:54', '2018-09-28 14:34:21'),
(2, 2, 5, 'lkjl', '2018-09-28 14:23:02', '2018-09-28 14:23:02'),
(2, 2, 6, 'sdfds', '2018-09-28 14:35:16', '2018-09-28 14:35:16'),
(4, 7, 7, 'dfs dsfsd fd', '2018-09-28 14:45:59', '2018-09-28 14:45:59'),
(4, 7, 8, 'dsfd dsf sd', '2018-09-28 14:46:05', '2018-09-28 14:46:22'),
(4, 7, 9, 'dsfds', '2018-09-28 14:46:09', '2018-09-28 14:46:09'),
(4, 7, 10, 'dfds fsd', '2018-09-28 14:46:14', '2018-09-28 14:46:14'),
(4, 4, 11, 'jayesh', '2018-09-28 14:46:36', '2018-09-28 14:53:40'),
(4, 4, 12, 'Ups', '2018-09-28 14:47:58', '2018-09-28 14:53:56'),
(4, 8, 13, 'sdfsd', '2018-09-28 14:51:37', '2018-09-28 14:51:37'),
(4, 8, 14, 'jayesh', '2018-09-28 14:52:52', '2018-09-28 14:53:14'),
(4, 8, 15, 'dfgfdg', '2018-09-28 14:52:57', '2018-09-28 14:52:57'),
(4, 8, 16, 'sdfds', '2018-09-28 14:53:06', '2018-09-28 14:53:06');

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
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `form_id` int(10) NOT NULL,
  `question_id` int(10) NOT NULL,
  `question_description` varchar(500) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`form_id`, `question_id`, `question_description`, `created_at`, `updated_at`) VALUES
(1, 3, 'edfds fsdf sdfsd f', '2018-09-27 15:01:10', '2018-09-27 15:01:10'),
(1, 4, 'dasda', '2018-09-27 15:11:09', '2018-09-27 15:11:09'),
(1, 5, 'How Old Are You?', '2018-09-28 13:37:51', '2018-09-28 13:37:51'),
(2, 6, 'sdfsd', '2018-09-28 14:14:33', '2018-09-28 14:14:33'),
(4, 7, 'asd sa dsfd sfs', '2018-09-28 14:45:40', '2018-09-28 14:45:40'),
(4, 8, 'What is your name?', '2018-09-28 14:50:27', '2018-09-28 14:54:12');

-- --------------------------------------------------------

--
-- Table structure for table `survey`
--

CREATE TABLE `survey` (
  `survey_id` int(5) NOT NULL,
  `company_id` int(11) NOT NULL,
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
  `form_id` int(10) NOT NULL,
  `id` int(5) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `type` varchar(10) NOT NULL DEFAULT 'multiple'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `survey_question`
--

INSERT INTO `survey_question` (`form_id`, `id`, `description`, `type`) VALUES
(0, 1, '\r\n  \r\n \r\nIn thinking about your most recent experience with [COMPANY], how was the quality of customer service you received?', 'multiple'),
(0, 2, 'The process for getting your concerns resolved was: ', 'multiple'),
(0, 3, 'Now please think about the features and benefits of the [PRODUCT] itself. How satisfied are you with the [PRODUCT]:', 'multiple');

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
(2, 'Jayesh Ingle', 'respondent', 'abc@gmail.com', '$2y$10$1V4yOkrQbwAN2bUm6hAInOMYfTApHORNRW135ZE1ldtn9a7eYaUb.', NULL, '2018-09-22 06:12:56', '2018-09-22 06:12:56'),
(3, 'Dhaval Patel', 'respondent', 'dhaval@gmail.com', '$2y$10$GjhjabwUiIi.vbTCoX8ZXu2KaWk/LxSLWvoQHdxCrYxKGClMafE4S', NULL, '2018-10-01 06:10:06', '2018-10-01 06:10:06');

-- --------------------------------------------------------

--
-- Table structure for table `user_survey`
--

CREATE TABLE `user_survey` (
  `user_id` varchar(100) NOT NULL,
  `survey_id` int(11) NOT NULL,
  `form_id` int(11) NOT NULL,
  `question_id` int(11) NOT NULL,
  `answer_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`company_id`);

--
-- Indexes for table `company_survey`
--
ALTER TABLE `company_survey`
  ADD PRIMARY KEY (`survey_id`);

--
-- Indexes for table `forms`
--
ALTER TABLE `forms`
  ADD PRIMARY KEY (`form_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `options`
--
ALTER TABLE `options`
  ADD UNIQUE KEY `option_id` (`option_id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD UNIQUE KEY `question_id` (`question_id`);

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
  MODIFY `company_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `company_survey`
--
ALTER TABLE `company_survey`
  MODIFY `survey_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `forms`
--
ALTER TABLE `forms`
  MODIFY `form_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `options`
--
ALTER TABLE `options`
  MODIFY `option_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `question_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
