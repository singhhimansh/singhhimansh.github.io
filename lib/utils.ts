export const calculateExperienceDuration = (start: string, end?: string): string => {
  const startDate = new Date(start)
  const endDate = end ? new Date(end) : new Date()
  const diff = endDate.getTime() - startDate.getTime()
  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25))
  const months = Math.floor(
    (diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30),
  )
  return `${years > 0 ? `${years} years` : ''} ${months > 0 ? `${months} months` : ''}`.trim()
}

export const calculateTotalExperience = (workData: Array<{ start: string; end?: string }>): string => {
  const totalExperienceInDays = workData.reduce((total, work) => {
    const startDate = new Date(work.start)
    const endDate = work.end ? new Date(work.end) : new Date()
    const diff = endDate.getTime() - startDate.getTime()
    return total + Math.ceil(diff / (1000 * 60 * 60 * 24))
  }, 0)
  const totalExperienceInYears = totalExperienceInDays / 365.25
  if (totalExperienceInYears % 1 >= 0.7) {
    return `around ${Math.ceil(totalExperienceInYears)}`
  } else if (totalExperienceInYears % 1 <= 0.3) {
    return `over ${Math.floor(totalExperienceInYears)}`
  } else {
    return `around ${Math.floor(totalExperienceInYears) + 0.5}`
  }
}
