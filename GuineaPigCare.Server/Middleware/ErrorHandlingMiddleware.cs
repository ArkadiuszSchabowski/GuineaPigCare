using GuineaPigCare.Server.Exceptions;

namespace GuineaPigCare.Server.Middleware
{
    public class ErrorHandlingMiddleware : IMiddleware
    {
        private readonly ILogger<ErrorHandlingMiddleware> _logger;

        public ErrorHandlingMiddleware(ILogger<ErrorHandlingMiddleware> logger)
        {
            _logger = logger;
        }
        public async Task InvokeAsync(HttpContext context, RequestDelegate next)
        {
			try
			{
				await next.Invoke(context);
			}
			catch (BadRequestException e)
			{
				context.Response.StatusCode = 400;
				await context.Response.WriteAsync(e.Message);
                _logger.LogError(e, e.Message);
            }
            catch (UnauthorizedException e)
            {
                context.Response.StatusCode = 401;
                await context.Response.WriteAsync(e.Message);
                _logger.LogError(e, e.Message);
            }
            catch (ForbiddenException e)
            {
                context.Response.StatusCode = 403;
                await context.Response.WriteAsync(e.Message);
                _logger.LogError(e, e.Message);
            }
            catch (NotFoundException e){
                context.Response.StatusCode = 404;
                await context.Response.WriteAsync(e.Message);
                _logger.LogError(e, e.Message);
            }
			catch(ConflictException e)
			{
				context.Response.StatusCode = 409;
				await context.Response.WriteAsync(e.Message);
                _logger.LogError(e, e.Message);
            }
			catch (Exception e)
			{
				context.Response.StatusCode = 500;
				await context.Response.WriteAsync("Błąd serwera");
                _logger.LogError(e, "Błąd serwera");
            }
        }
    }
}
