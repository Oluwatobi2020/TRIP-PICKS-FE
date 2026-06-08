export const apiRoutes = {
    userLogin:"auth/login",
    userRegister:"auth/register",
    getAllActivities:"activity/get-all-activities",
    getAllActivitiesId:"activity/get-activityById", //append id as path param
    createAPlan:"plan/create-plan",
    updateAPlan:"plan/update-plan", //append userId as path param
    getAllPlans:"plan/get-all", //append userId as path param
    getPlanById:"plan/get-planById",
    toggleActivitySaving:"saved-activity/saved", //append userId and activityId as path param
    getAllUserSavedActivities:"saved-activity/saved", //append userId as path param

}