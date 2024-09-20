export function formatScheduleTime(scheduleTime) {
    const [hours, minutes] = scheduleTime.split(":").map(Number);
    const ampm = hours >= 12 ? "PM" : "AM";
    const hours12 = hours % 12 || 12; // 12 saat formatına çevirme
    const minutesStr = minutes < 10 ? "0" + minutes : minutes;
    return `${hours12}:${minutesStr} ${ampm}`;
  }
  
  export function formatEstimatedTime(dateTimeString) {
    const date = new Date(dateTimeString);
    let hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // 12 saat formatına çevirme
    const minutesStr = minutes < 10 ? "0" + minutes : minutes;
    return `${hours}:${minutesStr} ${ampm}`;
  }
  
  export function parseTime(timeStr) {
    const [time, period] = timeStr.split(" ");
    const [hours, minutes] = time.split(":").map(Number);
  
    let hours12 = hours;
    if (period === "PM" && hours12 < 12) {
      hours12 += 12;
    } else if (period === "AM" && hours12 === 12) {
      hours12 = 0;
    }
  
    const date = new Date();
    date.setHours(hours12, minutes, 0, 0);
    return date;
  }
  
  export function calculateTimeDifference(startTime, endTime) {
    const start = parseTime(startTime);
    const end = parseTime(endTime);
  
    const diffMs = end - start;
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
  
    return `${diffHours}h ${diffMinutes}m`;
  }