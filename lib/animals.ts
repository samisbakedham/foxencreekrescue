export type AnimalStatus = "available" | "pending" | "in-foster";

export type Animal = {
  slug: string;
  name: string;
  species: "Dog" | "Cat";
  oneLiner: string;
  age: string;
  location: string;
  status: AnimalStatus;
  story: string;
  goodWith: string[];
};

export const statusLabels: Record<AnimalStatus, string> = {
  available: "Ready for adoption",
  pending: "Adoption pending",
  "in-foster": "Still in foster",
};

export const animals: Animal[] = [
  {
    slug: "juniper",
    name: "Juniper",
    species: "Dog",
    oneLiner: "A shepherd mix who likes to lead the walk.",
    age: "6 months",
    location: "Foster in Sisquoc",
    status: "in-foster",
    story:
      "Found near Sisquoc on a hot afternoon, Juniper is all legs and curiosity. She loves slow mornings, a good sniff of the oak line, and people who let her set the pace. Still learning that the vacuum is not a predator.",
    goodWith: ["Kids", "Other dogs", "A patient walker"],
  },
  {
    slug: "marlowe",
    name: "Marlowe",
    species: "Dog",
    oneLiner: "A two-year-old who came to us when his family moved.",
    age: "2 years",
    location: "Foster in Orcutt",
    status: "available",
    story:
      "Marlowe is the gentle type — easy with cats, kids, and the foster's grandma. He came to us from county after his family relocated and couldn't take him along. He'd be happiest with a sunny spot and a steady routine.",
    goodWith: ["Cats", "Kids", "First-time adopters"],
  },
  {
    slug: "sage",
    name: "Sage",
    species: "Cat",
    oneLiner: "A shy tortie warming up to lap time.",
    age: "3 years",
    location: "Foster in Lompoc",
    status: "in-foster",
    story:
      "Sage came in skittish and has been quietly deciding that people are alright after all. She's at her best in a calm home where she can choose when to come close. The reward is worth the wait — she's a committed lap cat once she trusts you.",
    goodWith: ["Quiet homes", "Adult households"],
  },
  {
    slug: "biscuit",
    name: "Biscuit",
    species: "Dog",
    oneLiner: "Senior beagle, expert napper, gentle soul.",
    age: "9 years",
    location: "Foster in Santa Maria",
    status: "available",
    story:
      "Biscuit has earned his retirement. He asks for two short walks, a soft bed, and someone to keep him company. Older dogs settle in fast and love hard — Biscuit is proof.",
    goodWith: ["Calm households", "Other mellow pets"],
  },
  {
    slug: "willow-litter",
    name: "Willow's Litter",
    species: "Cat",
    oneLiner: "Four kittens, about six weeks, small and loud.",
    age: "6 weeks",
    location: "Intake this week",
    status: "in-foster",
    story:
      "Four healthy, weaned kittens who need a quiet room for a few weeks until they're old enough to spay/neuter and head to their homes. They come as a bundle of chaos and purring. Adoption opens once they're cleared by the vet.",
    goodWith: ["Foster homes", "Kitten people"],
  },
  {
    slug: "dahlia",
    name: "Dahlia",
    species: "Cat",
    oneLiner: "A confident calico who runs the household.",
    age: "4 years",
    location: "Foster in Santa Maria",
    status: "pending",
    story:
      "Dahlia knows what she wants and is happy to tell you. She's social, playful, and does best as the only cat so she can have the spotlight. An adoption is in progress — fingers crossed for this one.",
    goodWith: ["Solo-cat homes", "Playful households"],
  },
];

export function getAnimal(slug: string) {
  return animals.find((a) => a.slug === slug);
}
