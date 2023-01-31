const TimeService = {
  convertTimezone: (dateString: string, timeZone?: string) => {
    const date = new Date(dateString);
    return date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      timeZone: timeZone,
    });
  },
};

export default TimeService;
