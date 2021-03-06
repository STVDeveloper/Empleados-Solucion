USE [master]
GO
/****** Object:  Database [Empleados]    Script Date: 20/12/2021 02:40:35 p. m. ******/
CREATE DATABASE [Empleados]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Empleados', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\Empleados.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'Empleados_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\Empleados_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [Empleados] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Empleados].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Empleados] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Empleados] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Empleados] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Empleados] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Empleados] SET ARITHABORT OFF 
GO
ALTER DATABASE [Empleados] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [Empleados] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Empleados] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Empleados] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Empleados] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Empleados] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Empleados] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Empleados] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Empleados] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Empleados] SET  DISABLE_BROKER 
GO
ALTER DATABASE [Empleados] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Empleados] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Empleados] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Empleados] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Empleados] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Empleados] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [Empleados] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Empleados] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [Empleados] SET  MULTI_USER 
GO
ALTER DATABASE [Empleados] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Empleados] SET DB_CHAINING OFF 
GO
ALTER DATABASE [Empleados] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [Empleados] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [Empleados] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [Empleados] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
ALTER DATABASE [Empleados] SET QUERY_STORE = OFF
GO
USE [Empleados]
GO
/****** Object:  Table [dbo].[Empleados]    Script Date: 20/12/2021 02:40:35 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Empleados](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](50) NOT NULL,
	[ApPaterno] [varchar](50) NOT NULL,
	[ApMaterno] [varchar](50) NOT NULL,
	[Edad] [int] NOT NULL,
	[FecNacimiento] [date] NOT NULL,
	[Genero] [varchar](1) NOT NULL,
	[EstadoCivil] [varchar](1) NOT NULL,
	[RFC] [varchar](13) NOT NULL,
	[Direccion] [varchar](300) NOT NULL,
	[Email] [varchar](100) NOT NULL,
	[Telefono] [varchar](10) NOT NULL,
	[Puesto] [varchar](50) NOT NULL,
	[FecAlta] [date] NOT NULL,
	[FecBaja] [date] NULL
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Empleados] ON 

INSERT [dbo].[Empleados] ([id], [Nombre], [ApPaterno], [ApMaterno], [Edad], [FecNacimiento], [Genero], [EstadoCivil], [RFC], [Direccion], [Email], [Telefono], [Puesto], [FecAlta], [FecBaja]) VALUES (1, N'Jose', N'Lopez', N'Garcia', 34, CAST(N'1981-03-01' AS Date), N'M', N'S', N'LOGS700304MN1', N'Conocida', N'jl@gmail.com', N'5589257845', N'Conultor Contable', CAST(N'2018-01-01' AS Date), NULL)
INSERT [dbo].[Empleados] ([id], [Nombre], [ApPaterno], [ApMaterno], [Edad], [FecNacimiento], [Genero], [EstadoCivil], [RFC], [Direccion], [Email], [Telefono], [Puesto], [FecAlta], [FecBaja]) VALUES (2, N'Maria', N'Gonzalez', N'Hernandez', 21, CAST(N'2000-09-01' AS Date), N'F', N'C', N'GoHM000109DS4', N'Conicda', N'mg@yahoo.com', N'5854785678', N'Analista finanzas', CAST(N'2017-06-05' AS Date), NULL)
SET IDENTITY_INSERT [dbo].[Empleados] OFF
GO
USE [master]
GO
ALTER DATABASE [Empleados] SET  READ_WRITE 
GO
