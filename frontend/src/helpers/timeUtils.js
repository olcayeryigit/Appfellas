// 12 saatlik formata göre saati biçimlendirme (örneğin: 14:30 -> 2:30 PM)
export function formatTimeTo12Hour(timeStr) {
  const [hours, minutes] = timeStr.split(":").map(Number);
  const period = hours >= 12 ? "PM" : "AM";
  const hours12 = hours % 12 || 12; // 0 olduğunda 12 olarak döndür
  const formattedMinutes = minutes.toString().padStart(2, "0"); // Dakikayı iki haneli göster
  return `${hours12}:${formattedMinutes} ${period}`;
}

// ISO tarih saat bilgisini 12 saatlik formatta biçimlendirme (örneğin: "2024-09-20T00:05:00.000+02:00")
export function formatDateTimeTo12Hour(dateTimeStr) {
  const date = new Date(dateTimeStr);
  
  // Geçersiz tarih kontrolü
  if (isNaN(date.getTime())) {
    return "Bilinmiyor"; // Hata mesajı veya uygun bir değer döndür
  }

  let hours = date.getHours();
  const minutes = date.getMinutes();
  const period = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // 0 olduğunda 12 olarak döndür
  const formattedMinutes = minutes.toString().padStart(2, "0");
  
  return `${hours}:${formattedMinutes} ${period}`;
}

// 12 saatlik zaman biçimini Date objesine çevirme (örneğin: "2:30 PM" -> Date objesi)
export function parse12HourTimeTo24Hour(timeStr) {
  const [time, period] = timeStr.split(" ");
  let [hours, minutes] = time.split(":").map(Number);

  if (period === "PM" && hours < 12) {
    hours += 12;
  } else if (period === "AM" && hours === 12) {
    hours = 0;
  }

  const date = new Date();
  date.setHours(hours, minutes, 0, 0); // Saat ve dakikayı ayarlama
  return date;
}




// Başlangıç ve bitiş zamanı arasındaki farkı hesaplama (örneğin: "2:30 PM" -> "4h 30m")
export function calculateTimeDifference(startTime, endTime) {
  if (!startTime || !endTime) {
    return ""; // Girişler yoksa boş döndür
  }

  const start = new Date(startTime);
  const end = new Date(endTime);

  // Geçersiz tarih kontrolü
  if (isNaN(start.getTime()) || isNaN(end.getTime())) {
    return ""; // Geçersiz tarih varsa boş döndür
  }

  let differenceMs = end - start;
  if (differenceMs < 0) {
    differenceMs += 24 * 60 * 60 * 1000;
  }

  const diffHours = Math.floor(differenceMs / (1000 * 60 * 60));
  const diffMinutes = Math.floor((differenceMs % (1000 * 60 * 60)) / (1000 * 60));

  return `${diffHours}h ${diffMinutes}m`;
}