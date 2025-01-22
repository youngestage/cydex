import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
  },
  {
    name: "Michael Chen",
    role: "Head of Operations",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
  },
  {
    name: "Emma Williams",
    role: "Sustainability Director",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
  },
  {
    name: "David Miller",
    role: "Tech Lead",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
  },
];

export const Team = () => {
  return (
    <section className="py-20 bg-cydex-soft">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white p-6 rounded-xl shadow-sm text-center"
            >
              <Avatar className="w-32 h-32 mx-auto mb-4">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback>{member.name[0]}</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};