-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 27, 2018 at 03:36 PM
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
(17, 'Manasi pvt. ltd.', '...', '2018-12-26 13:57:43', '2018-12-26 13:57:43');

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
(29, 17, 8, 'Employee Satisfaction Survey', '2018-12-26', '2018-12-30', '2018-12-26 14:02:26', '2018-12-26 14:02:26');

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
(8, 'Employee Satisfaction Survey', '...', '2018-12-26 13:59:10', '2018-12-26 13:59:10');

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
(8, 20, 59, 'Strongly Agree', '2018-12-26 14:00:41', '2018-12-26 14:00:41'),
(8, 20, 60, 'Disagree', '2018-12-26 14:00:41', '2018-12-26 14:00:41'),
(8, 20, 61, 'Agree', '2018-12-26 14:00:41', '2018-12-26 14:00:41'),
(8, 20, 62, 'Neutral', '2018-12-26 14:00:42', '2018-12-26 14:00:42'),
(8, 20, 63, 'Strongly Disagree', '2018-12-26 14:00:42', '2018-12-26 14:00:42'),
(8, 21, 64, 'Strongly Agree', '2018-12-26 14:01:51', '2018-12-26 14:01:51'),
(8, 21, 65, 'Agree', '2018-12-26 14:01:51', '2018-12-26 14:01:51'),
(8, 21, 66, 'Neutral', '2018-12-26 14:01:51', '2018-12-26 14:01:51'),
(8, 21, 67, 'Disagree', '2018-12-26 14:01:51', '2018-12-26 14:01:51'),
(8, 21, 68, 'Strongly Disagree', '2018-12-26 14:01:52', '2018-12-26 14:01:52'),
(8, 45, 77, 'Strongly Agree', '2018-12-27 14:34:51', '2018-12-27 14:34:51'),
(8, 45, 78, 'Agree', '2018-12-27 14:34:51', '2018-12-27 14:34:51'),
(8, 45, 79, 'Neutral', '2018-12-27 14:34:51', '2018-12-27 14:34:51'),
(8, 45, 80, 'Disagree', '2018-12-27 14:34:51', '2018-12-27 14:34:51'),
(8, 45, 81, 'Strongly Disagree', '2018-12-27 14:34:51', '2018-12-27 14:34:51'),
(8, 46, 82, 'Strongly Agree', '2018-12-27 14:35:52', '2018-12-27 14:35:52'),
(8, 46, 83, 'Agree', '2018-12-27 14:35:52', '2018-12-27 14:35:52'),
(8, 46, 84, 'Neutral', '2018-12-27 14:35:52', '2018-12-27 14:35:52'),
(8, 46, 85, 'Disagree', '2018-12-27 14:35:52', '2018-12-27 14:35:52'),
(8, 46, 86, 'Strongly Disagree', '2018-12-27 14:35:52', '2018-12-27 14:35:52');

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
  `question_type` varchar(10) NOT NULL DEFAULT 'multiple',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`form_id`, `question_id`, `question_description`, `question_type`, `created_at`, `updated_at`) VALUES
(8, 20, 'Diversity is a barrier to progression at my organisation', 'MCQ', '2018-12-26 13:59:41', '2018-12-26 13:59:41'),
(8, 21, 'I feel that my work or studies contribute to the mission of the organisation', 'MCQ', '2018-12-26 14:01:12', '2018-12-26 14:01:12'),
(8, 45, 'I feel connected to the vision, mission and values of the organisation', 'MCQ', '2018-12-27 14:34:51', '2018-12-27 14:34:51'),
(8, 46, 'I have had opportunities at to develop professionally', 'MCQ', '2018-12-27 14:35:52', '2018-12-27 14:35:52');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `company_id` int(11) DEFAULT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_type` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'respondent',
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `department` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL,
  `level` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `company_id`, `name`, `user_type`, `email`, `department`, `level`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(4, NULL, 'Admin', 'admin', 'survey@gmail.com', 'Admin', 'A', '$2y$10$NsM4I1ELRg.qY7IdWV5sxOWETR9PCbH4K87f2fWXF2Lzd/.RflfF2', NULL, '2018-10-15 00:16:00', '2018-10-15 00:16:00'),
(70, 17, 'Test1', 'respondent', 'manasi.rathod@gmail.com', 'Operations', 'a', '$2y$10$QchZEGrROMy81.CFVXmm8e5G.FMUHqr9w/sjEtUD16sDckxoMyDCq', NULL, NULL, NULL),
(71, 17, 'Test2', 'respondent', 'rathod1304@gmail.com', 'Sales', 'b', '$2y$10$ThvUvj41OE0ic5ZWcr9SguSpeduyDhIGSHVKPBA4zuJRBtTNx4EW6', NULL, NULL, NULL),
(72, 17, 'Test 3', 'respondent', 'mjr1304@gmail.com', 'Sales', 'a', '$2y$10$r1h09k1y7Zygn5LOqeVzxepD/ayQrnpP/0PfAlNzXC.UHn3zKgRjG', NULL, NULL, NULL),
(73, 17, 'Test 4', 'respondent', 'info@manasirathod.com', 'Director', 'a', '$2y$10$hneXzCzFGJr2PjZuP9SHXut.36pp6jautxvdS9a0qmb8r9Pj3o9b2', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user_survey`
--

CREATE TABLE `user_survey` (
  `user_id` varchar(100) NOT NULL,
  `survey_id` int(11) NOT NULL,
  `form_id` int(11) NOT NULL,
  `question_id` int(11) NOT NULL,
  `answer_id` varchar(200) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_survey`
--

INSERT INTO `user_survey` (`user_id`, `survey_id`, `form_id`, `question_id`, `answer_id`, `created_at`, `updated_at`) VALUES
('mjr1304@gmail.com', 29, 8, 20, '59', '2018-12-26 14:03:39', '2018-12-26 14:03:39'),
('mjr1304@gmail.com', 29, 8, 21, '65', '2018-12-26 14:03:39', '2018-12-26 14:03:39');

-- --------------------------------------------------------

--
-- Table structure for table `user_survey_link`
--

CREATE TABLE `user_survey_link` (
  `company_id` int(11) NOT NULL,
  `user_id` varchar(200) NOT NULL,
  `survey_id` int(11) NOT NULL DEFAULT '0',
  `status` varchar(200) NOT NULL DEFAULT 'open',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_survey_link`
--

INSERT INTO `user_survey_link` (`company_id`, `user_id`, `survey_id`, `status`, `created_at`, `updated_at`) VALUES
(17, 'info@manasirathod.com', 29, 'open', '2018-12-26 13:58:00', '2018-12-26 14:02:27'),
(17, 'manasi.rathod@gmail.com', 29, 'open', '2018-12-26 13:58:00', '2018-12-26 14:02:27'),
(17, 'mjr1304@gmail.com', 29, 'submitted', '2018-12-26 13:58:00', '2018-12-26 14:03:39'),
(17, 'rathod1304@gmail.com', 29, 'open', '2018-12-26 13:58:00', '2018-12-26 14:02:27');

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
  ADD PRIMARY KEY (`survey_id`,`company_id`,`form_id`);

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
-- Indexes for table `user_survey`
--
ALTER TABLE `user_survey`
  ADD PRIMARY KEY (`user_id`,`survey_id`,`form_id`,`question_id`);

--
-- Indexes for table `user_survey_link`
--
ALTER TABLE `user_survey_link`
  ADD PRIMARY KEY (`company_id`,`user_id`,`survey_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `company`
--
ALTER TABLE `company`
  MODIFY `company_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `company_survey`
--
ALTER TABLE `company_survey`
  MODIFY `survey_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `forms`
--
ALTER TABLE `forms`
  MODIFY `form_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `options`
--
ALTER TABLE `options`
  MODIFY `option_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=87;

--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `question_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
