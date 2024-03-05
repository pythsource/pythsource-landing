namespace HOME_API;

internal abstract class Server
{
	// TODO: Move to .env file!
	public const string SQL_CONNECTION_STRING =
		"Server=central-db;Port=3306;Database=landing;User=landing_user;Password=ZGOuFHxvFoGGKQvusjQ1;";

	private static void Main()
	{
		var builder = WebApplication.CreateBuilder();
		builder.Services.AddEndpointsApiExplorer();
		
		builder.Services.AddControllers();
		builder.Services.AddCors(_options =>
		{
			_options.AddPolicy(name: "MainCORSPolicy",
				_policy =>
				{
					_policy.WithOrigins("https://pythsource.com",
						"https://www.pythsource.com",
						"http://localhost:5173");
					_policy.WithHeaders("Content-Type");
				});
		});
		
		var app = builder.Build();
		app.MapControllers();
		app.UseCors("MainCORSPolicy");
		app.Run();
	}
}