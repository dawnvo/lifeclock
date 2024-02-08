export function formatTime(hours, minutes) {
  const period = hours < 12 ? '오전' : '오후';
  hours = hours % 12 || 12;

  return `${period} ${hours}시 ${minutes}분`;
}

export function validateBirthYear(lifeExpectancy, birthYear) {
  const currentYear = new Date().getFullYear();
  const minYear = currentYear - lifeExpectancy;
  const maxYear = currentYear;

  if (!birthYear || minYear > birthYear || maxYear < birthYear) {
    return `출생연도를 입력해주세요 (${minYear}~${maxYear})`;
  }

  return null;
}

export function calculateLifeClock(lifeExpectancy, birthYear) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;

  // 시간 계산
  const minutesPerYear = (24 * 60) / lifeExpectancy;
  const minutesAlive = age * minutesPerYear;

  // 시간 형식
  const hours = Math.floor(minutesAlive / 60);
  const minutes = Math.floor(minutesAlive % 60);

  return { hours, minutes };
}
