using Microsoft.AspNetCore.Mvc;
namespace HOME_API;

[ApiController]
[Route("/")]
public class Api
{
	[HttpGet("processpoosy")]
	public IActionResult ProcessPoosy()
	{
		return new OkResult();
	}
}