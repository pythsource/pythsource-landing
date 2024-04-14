using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;
using MySqlConnector;
namespace HOME_API;

[ApiController]
[Route("/")]
public class Api : ControllerBase
{
	[HttpGet("index_blogs")]
	public async Task<IResult> IndexBlogs()
	{
		// These are used to generate search filters
		var blogCategories = new List<string>();
		var blogAuthors = new List<string>();
		var blogPosts = new List<object>();

		await using (var sqlConnection = new MySqlConnection(Server.SQL_CONNECTION_STRING))
		{
			await sqlConnection.OpenAsync();

			var sqlCommand = new MySqlCommand("SELECT * FROM landing.blog", sqlConnection);
			var sqlReader = await sqlCommand.ExecuteReaderAsync();

			while (await sqlReader.ReadAsync())
			{
				var postId = sqlReader.GetInt32(0);
				var postTitle = sqlReader.GetString(1);
				var postContent = sqlReader.GetString(2);
				var postCategory = sqlReader.GetString(3);
				var postAuthor = sqlReader.GetString(4);
				var postDate = sqlReader.GetDateTime(5);

				blogPosts.Add(new
				{
					postId = postId.ToString(),
					postTitle,
					postContent,
					postCategory,
					postAuthor,
					postDate = postDate.ToString("yyyy-MM-dd")
				});

				if (!blogCategories.Contains(postCategory))
					blogCategories.Add(postCategory);

				if (!blogAuthors.Contains(postAuthor))
					blogAuthors.Add(postAuthor);
			}

			await sqlConnection.CloseAsync();
		}

		return Results.Ok(new
		{
			blogCategories, blogAuthors, blogPosts
		});
	}

	[HttpPost("get_blogpost")]
	public async Task<IResult> GetBlogContent([FromQuery] string _id)
	{
		object blogPost;
		await using (var sqlConnection = new MySqlConnection(Server.SQL_CONNECTION_STRING))
		{
			await sqlConnection.OpenAsync();

			var sqlCommand =
				new MySqlCommand("SELECT * FROM landing.blog WHERE id=(@blogId)", sqlConnection);
			sqlCommand.Parameters.AddWithValue("blogId", _id);
			var sqlReader = await sqlCommand.ExecuteReaderAsync();
			var readResult = await sqlReader.ReadAsync();
			if (!readResult)
				return Results.NotFound();

			var blogId = sqlReader.GetInt32(0);
			var blogTitle = sqlReader.GetString(1);
			var blogContent = sqlReader.GetString(2);
			var blogCategory = sqlReader.GetString(3);
			var blogAuthor = sqlReader.GetString(4);
			var blogDate = sqlReader.GetDateTime(5);
			blogPost = new
			{
				blogId = blogId.ToString(),
				blogTitle,
				blogContent,
				blogCategory,
				blogAuthor,
				blogDate = blogDate.ToString("yyyy-MM-dd")
			};

			await sqlConnection.CloseAsync();
		}

		return Results.Ok(new
		{
			blogPost
		});
	}

	[HttpGet("index_jobs")]
	public async Task<IResult> IndexJobs()
	{
		// These are used to generate search filters
		var jobProjects = new List<string>();
		var jobCategories = new List<string>();
		var jobEmployments = new List<string>();
		var jobPosts = new List<object>();

		await using (var sqlConnection = new MySqlConnection(Server.SQL_CONNECTION_STRING))
		{
			await sqlConnection.OpenAsync();

			var sqlCommand = new MySqlCommand("SELECT * FROM landing.jobs", sqlConnection);
			var sqlReader = await sqlCommand.ExecuteReaderAsync();

			while (await sqlReader.ReadAsync())
			{
				var jobId = sqlReader.GetInt32(0);
				var jobTitle = sqlReader.GetString(1);
				var jobDesc = sqlReader.GetString(2);
				var jobProject = sqlReader.GetString(3);
				var jobCategory = sqlReader.GetString(4);
				var jobEmployment = sqlReader.GetString(5);
				var jobSalary = sqlReader.GetString(6);
				var jobDate = sqlReader.GetDateTime(7);

				jobPosts.Add(new
				{
					jobId = jobId.ToString(),
					jobTitle,
					jobDesc,
					jobProject,
					jobCategory,
					jobEmployment,
					jobSalary,
					jobDate = jobDate.ToString("yyyy-MM-dd")
				});

				if (!jobCategories.Contains(jobCategory))
					jobCategories.Add(jobCategory);

				if (!jobEmployments.Contains(jobEmployment))
					jobEmployments.Add(jobEmployment);

				if (!jobProjects.Contains(jobProject))
					jobProjects.Add(jobProject);
			}

			await sqlConnection.CloseAsync();
		}

		return Results.Ok(new
		{
			jobCategories, jobEmployments, jobProjects, jobPosts
		});
	}

	[HttpPost("filter_jobs")]
	public async Task<IResult> FilterJobs([FromBody] ModelDefinitions.FiltersModel _filters)
	{
		var jobPosts = new List<object>();

		if (_filters.Filters == null)
			throw new ArgumentException("_filters was somehow null (it shouldn't be!)");

		if (_filters.Filters.Length == 0)
			return await IndexJobs();

		var queryObjects = new List<string>();
		// ReSharper disable once LoopCanBeConvertedToQuery
		foreach (var filterObject in _filters.Filters)
		{
			if (filterObject.Type != "category" && filterObject.Type != "project" && filterObject.Type != "employment")
				continue;

			queryObjects.Add($"{filterObject.Type}=\'{filterObject.Name}\'");
		}

		await using (var sqlConnection = new MySqlConnection(Server.SQL_CONNECTION_STRING))
		{
			await sqlConnection.OpenAsync();

			var sqlCommand = new MySqlCommand($"SELECT * FROM landing.jobs WHERE {string.Join(" AND ", queryObjects)}",
				sqlConnection);

			var sqlCheck = await sqlCommand.ExecuteReaderAsync();
			var checkResult = await sqlCheck.ReadAsync();
			if (!checkResult)
				return Results.Ok(new
				{
					jobPosts
				});
			await sqlCheck.CloseAsync();

			var sqlReader = await sqlCommand.ExecuteReaderAsync();
			while (await sqlReader.ReadAsync())
			{
				var jobId = sqlReader.GetInt32(0);
				var jobTitle = sqlReader.GetString(1);
				var jobDesc = sqlReader.GetString(2);
				var jobProject = sqlReader.GetString(3);
				var jobCategory = sqlReader.GetString(4);
				var jobEmployment = sqlReader.GetString(5);
				var jobSalary = sqlReader.GetString(6);
				var jobDate = sqlReader.GetDateTime(7);

				jobPosts.Add(new
				{
					jobId = jobId.ToString(),
					jobTitle,
					jobDesc,
					jobProject,
					jobCategory,
					jobEmployment,
					jobSalary,
					jobDate = jobDate.ToString("yyyy-MM-dd")
				});
			}

			await sqlConnection.CloseAsync();
		}

		return Results.Ok(new
		{
			jobPosts
		});
	}

	[HttpPost("filter_blogs")]
	public async Task<IResult> FilterBlogs([FromBody] ModelDefinitions.FiltersModel _filters)
	{
		var blogPosts = new List<object>();

		if (_filters.Filters == null)
			throw new ArgumentException("_filters was somehow null (it shouldn't be!)");

		if (_filters.Filters.Length == 0)
			return await IndexBlogs();

		var queryObjects = new List<string>();
		// ReSharper disable once LoopCanBeConvertedToQuery
		foreach (var filterObject in _filters.Filters)
		{
			if (filterObject.Type != "category" && filterObject.Type != "author")
				continue;

			queryObjects.Add($"{filterObject.Type}=\'{filterObject.Name}\'");
		}

		await using (var sqlConnection = new MySqlConnection(Server.SQL_CONNECTION_STRING))
		{
			await sqlConnection.OpenAsync();

			var sqlCommand = new MySqlCommand($"SELECT * FROM landing.blog WHERE {string.Join(" AND ", queryObjects)}",
				sqlConnection);

			var sqlCheck = await sqlCommand.ExecuteReaderAsync();
			var checkResult = await sqlCheck.ReadAsync();
			if (!checkResult)
				return Results.Ok(new
				{
					blogPosts
				});
			await sqlCheck.CloseAsync();

			var sqlReader = await sqlCommand.ExecuteReaderAsync();
			while (await sqlReader.ReadAsync())
			{
				var postId = sqlReader.GetInt32(0);
				var postTitle = sqlReader.GetString(1);
				var postContent = sqlReader.GetString(2);
				var postCategory = sqlReader.GetString(3);
				var postAuthor = sqlReader.GetString(4);
				var postDate = sqlReader.GetDateTime(5);

				blogPosts.Add(new
				{
					postId = postId.ToString(),
					postTitle,
					postContent,
					postCategory,
					postAuthor,
					postDate = postDate.ToString("yyyy-MM-dd")
				});
			}

			await sqlConnection.CloseAsync();
		}

		return Results.Ok(new
		{
			blogPosts
		});
	}
}

public abstract class ModelDefinitions
{
	// ReSharper disable once ClassNeverInstantiated.Global
	// Here's why (look at solution 2): https://www.developerload.com/deserialization-of-reference-types-without-parameterless-constructor-is-not-supported
	public class FilterObject
	{
		[Required] public string? Name { get; set; }
		[Required] public string? Type { get; set; }
	}

	public class FiltersModel
	{
		[Required] public FilterObject[]? Filters { get; set; }
	}
}