
using GuineaPigCare.Server.Exceptions;

namespace GuineaPigCare.Server.Middleware
{
    public class ErrorHandlingMiddleware : IMiddleware
    {
        public async Task InvokeAsync(HttpContext context, RequestDelegate next)
        {
			try
			{
				await next.Invoke(context);
			}
			catch(ConflictException e)
			{
				context.Response.StatusCode = 409;
				await context.Response.WriteAsync(e.Message);
			}
			catch (Exception)
			{
				context.Response.StatusCode = 500;
				await context.Response.WriteAsync("Błąd serwera");
			}
        }
    }
}
