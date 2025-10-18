export async function GET(request) {
  try {
    const employees = [
      {
        id: 1,
        name: "Alice Johnson",
        title: "Senior Software Engineer",
        email: "alice.johnson@example.com",
        phone: "555-0101",
        department: "Engineering",
        avatar: "/images/alice.jpg",
      },
      {
        id: 2,
        name: "Bob Martinez",
        title: "Product Manager",
        email: "bob.martinez@example.com",
        phone: "555-0123",
        department: "Product",
        avatar: "/images/bob.jpg",
      },
      {
        id: 3,
        name: "Carla Singh",
        title: "UX Designer",
        email: "carla.singh@example.com",
        phone: "555-0145",
        department: "Design",
        avatar: "/images/carla.jpg",
      },
    ];

    const payload = { employees };

    return new Response(JSON.stringify(payload), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in employee GET handler:", error);
    return new Response(
      JSON.stringify({
        error:
          "Internal Server Error during token retrieval or response building.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
