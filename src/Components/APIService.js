// apiService.js
export const APIService = async (formData) => {
    try {
      const res = await fetch("https://prakashportfolio.bsite.net/api/Portfolio/ManageContact", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      if (res.ok) {
        const result = await res.json();
        return { success: true, data: result };
      } else {
        console.error("Server error:", res.statusText);
        return { success: false, error: res.statusText };
      }
    } catch (error) {
      console.error("Fetch error:", error);
      return { success: false, error: error.message };
    }
  };
  