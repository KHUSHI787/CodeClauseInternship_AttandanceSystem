document.addEventListener("DOMContentLoaded", () => {
    const attendanceForm = document.getElementById("attendanceForm");
    const nameSelect = document.getElementById("nameSelect");
    const markAttendanceButton = document.getElementById("markAttendance");
    const attendanceStatus = document.getElementById("attendanceStatus");

    markAttendanceButton.addEventListener("click", async () => {
        const selectedName = nameSelect.options[nameSelect.selectedIndex].text;
        const response = await markAttendance(selectedName);

        if (response.success) {
            attendanceStatus.textContent = `Attendance marked for ${selectedName}`;
        } else {
            attendanceStatus.textContent = "Failed to mark attendance. Please try again.";
        }
    });

    async function markAttendance(name) {
        return { success: true };
    }
});
