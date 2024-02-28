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
				var postTitle = sqlReader.GetString(0);
				var postContent = sqlReader.GetString(1);
				var postCategory = sqlReader.GetString(2);
				var postAuthor = sqlReader.GetString(3);
				var postDate = sqlReader.GetDateTime(4);

				blogPosts.Add(new
				{
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

	[HttpPost("get_blogcontent")]
	public async Task<IResult> GetBlogContent([FromQuery] string _title)
	{
		string blogContent;
		await using (var sqlConnection = new MySqlConnection(Server.SQL_CONNECTION_STRING))
		{
			await sqlConnection.OpenAsync();

			var sqlCommand =
				new MySqlCommand("SELECT content FROM landing.blog WHERE title=(@blogTitle)", sqlConnection);
			sqlCommand.Parameters.AddWithValue("blogTitle", _title);
			var sqlReader = await sqlCommand.ExecuteReaderAsync();
			var readResult = await sqlReader.ReadAsync();
			if (!readResult)
				return Results.NotFound();

			var sqlContent = sqlReader.GetString(0);
			blogContent = sqlContent;

			await sqlConnection.CloseAsync();
		}

		return Results.Ok(new
		{
			blogContent
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
				var jobTitle = sqlReader.GetString(0);
				var jobDesc = sqlReader.GetString(1);
				var jobProject = sqlReader.GetString(2);
				var jobCategory = sqlReader.GetString(3);
				var jobEmployment = sqlReader.GetString(4);
				var jobSalary = sqlReader.GetString(5);
				var jobDate = sqlReader.GetDateTime(6);

				jobPosts.Add(new
				{
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
}