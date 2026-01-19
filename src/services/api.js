const BASE_URL = 'http://localhost:5000/api';

const api = {
  // Auth
  register: async (name, email, password) => {
    const res = await fetch(`${BASE_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });
    return res.json();
  },

  login: async (email, password) => {
    const res = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    return res.json();
  },

  // Courses
  getCourses: async () => {
    const res = await fetch(`${BASE_URL}/courses`);
    return res.json();
  },

  getCourseById: async (id) => {
    const res = await fetch(`${BASE_URL}/courses/${id}`);
    if (!res.ok) {
      throw new Error(`Course not found`);
    }
    return res.json();
  },

  createCourse: async (courseData) => {
    const token = localStorage.getItem('token');
    const res = await fetch(`${BASE_URL}/courses`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(courseData),
    });
    return res.json();
  },

  updateCourse: async (id, courseData) => {
    const token = localStorage.getItem('token');
    const res = await fetch(`${BASE_URL}/courses/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(courseData),
    });
    return res.json();
  },

  deleteCourse: async (id) => {
    const token = localStorage.getItem('token');
    const res = await fetch(`${BASE_URL}/courses/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.json();
  },

  // Enquiries
  submitEnquiry: async (enquiryData) => {
    const res = await fetch(`${BASE_URL}/enquiries`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(enquiryData),
    });
    return res.json();
  },

  getEnquiries: async () => {
    const token = localStorage.getItem('token');
    const res = await fetch(`${BASE_URL}/enquiries`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.json();
  },

  updateEnquiryStatus: async (id, status, adminNotes = '') => {
    const token = localStorage.getItem('token');
    const res = await fetch(`${BASE_URL}/enquiries/${id}/status`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ status, adminNotes }),
    });
    return res.json();
  },

  // Get enquiry by payment token (public)
  getEnquiryByPaymentToken: async (token) => {
    const res = await fetch(`${BASE_URL}/enquiries/payment/${token}`);
    return res.json();
  },

  // Payment enrollment (public)
  enrollViaPayment: async (paymentToken, paymentMethod, userEmail, userName) => {
    const res = await fetch(`${BASE_URL}/enrollments/payment-enroll`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ paymentToken, paymentMethod, userEmail, userName }),
    });
    return res.json();
  },

  // Enrollments
  enrollCourse: async (courseId, paymentMethod = 'card') => {
    const token = localStorage.getItem('token');
    const res = await fetch(`${BASE_URL}/enrollments/enroll`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ courseId, paymentMethod }),
    });
    return res.json();
  },

  getUserEnrollments: async () => {
    const token = localStorage.getItem('token');
    const res = await fetch(`${BASE_URL}/enrollments/my-courses`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.json();
  },

  checkEnrollmentStatus: async (courseId) => {
    const token = localStorage.getItem('token');
    const res = await fetch(`${BASE_URL}/enrollments/status/${courseId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.json();
  },

  // Enrollments
  getMyEnrollments: async () => {
    const token = localStorage.getItem('token');
    const res = await fetch(`${BASE_URL}/enrollments/my-courses`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.json();
  },

  updateCourseProgress: async (enrollmentId, progress) => {
    const token = localStorage.getItem('token');
    const res = await fetch(`${BASE_URL}/enrollments/${enrollmentId}/progress`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ progress }),
    });
    return res.json();
  },

  // OTP Verification methods
  verifyRegistration: async (email, otp) => {
    const res = await fetch(`${BASE_URL}/auth/verify-registration`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, otp }),
    });
    
    if (!res.ok) {
      const errorData = await res.json();
      throw {
        response: {
          status: res.status,
          data: errorData
        }
      };
    }
    
    return res.json();
  },

  resendVerification: async (email) => {
    const res = await fetch(`${BASE_URL}/auth/resend-verification`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    
    if (!res.ok) {
      const errorData = await res.json();
      throw {
        response: {
          status: res.status,
          data: errorData
        }
      };
    }
    
    return res.json();
  },

  // Generic post method for axios-style usage
  post: async (endpoint, data, options = {}) => {
    const token = localStorage.getItem('token');
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers
    };
    
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
    
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      method: 'POST',
      headers,
      body: JSON.stringify(data),
    });
    
    if (!res.ok) {
      const errorData = await res.json();
      throw {
        response: {
          status: res.status,
          data: errorData
        }
      };
    }
    
    const result = await res.json();
    return { data: result };
  },
};

export default api;
