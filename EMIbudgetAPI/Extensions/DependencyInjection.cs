using EMIbudgetAPI.DataModels.Repository;
using EMIbudgetAPI.DataModels.Repository.Interfaces;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using EMIbudgetAPI.Services;
using EMIbudgetAPI.Services.Interfaces;
using EMIbudgetAPI.AutoMapper;

namespace EMIbudgetAPI.Extensions
{
    public static class DependencyInjection
    {
        public static void ConfiguringServices(this IServiceCollection services,IConfiguration configuration)
        {
            services.AddScoped<IBudgetRequestRepository, BudgetRequestRepository>();
            services.AddScoped<IBudgetRequestService, BudgetRequestService>();
            services.AddScoped<ILoginDetailsService, LoginDetailsService>();
            services.AddScoped<ILoginRepository, LoginDetailsRepository>();
            services.AddScoped<IBudgetRequestsByStatusRepository, BudgetRequestsByStatusRepository>();
            services.AddScoped<IBudgetRequestByStatusService, BudgetRequestByStatusService>();
            services.AddScoped<IBudgetRequestByStatusForSeperiorRepo, BudgetRequestByStatusForSuperiorRepo>();
            services.AddScoped<IBudgetRequestByStatusForSeperiorService, BudgetRequestByStatusForSeperiorService>();
            services.AddAutoMapper(typeof(ProfileMapper));
        }
    }
}
