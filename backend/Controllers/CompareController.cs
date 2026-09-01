using Microsoft.AspNetCore.Mvc;
using Backend.Models;

namespace Backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CompareController : ControllerBase
{
    private readonly HttpClient _httpClient;

    public CompareController(HttpClient httpClient)
    {
        _httpClient = httpClient;
    }

    [HttpPost]
    public async Task<IActionResult> Compare(CompareRequest request)
    {
        string homeUrl =
            $"https://salarybyrole.com/api/salary?role=software-engineer&country={request.HomeCountry}";

        string destinationUrl =
            $"https://salarybyrole.com/api/salary?role=software-engineer&country={request.DestinationCountry}";

        var homeResponse = await _httpClient.GetStringAsync(homeUrl);
        var destinationResponse = await _httpClient.GetStringAsync(destinationUrl);

        return Ok(new
        {
            home = homeResponse,
            destination = destinationResponse
        });
    }
}