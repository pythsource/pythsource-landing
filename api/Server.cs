namespace HOME_API;

internal abstract class Server
{
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