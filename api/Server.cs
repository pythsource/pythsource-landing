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
		
		var app = builder.Build();
		app.MapControllers();
		app.Run();
	}
}