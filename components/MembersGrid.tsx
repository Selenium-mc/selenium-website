import { Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";


export default function MemberGrid() {
  return (
    <SimpleGrid columns={5} spacing="10px">
      {/* That feeling when everyone is a banana */}
      <MemberCard name="Alex"   rank="Founder" photoUrl="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fweknowyourdreams.com%2Fimages%2Fbanana%2Fbanana-02.jpg&f=1&nofb=1" />
      <MemberCard name="Joey"   rank="Member"  photoUrl="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fweknowyourdreams.com%2Fimages%2Fbanana%2Fbanana-02.jpg&f=1&nofb=1" />
      <MemberCard name="Eli"    rank="Member"  photoUrl="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fweknowyourdreams.com%2Fimages%2Fbanana%2Fbanana-02.jpg&f=1&nofb=1" />
      <MemberCard name="Bernardo" rank="Member"  photoUrl="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fweknowyourdreams.com%2Fimages%2Fbanana%2Fbanana-02.jpg&f=1&nofb=1" />
      <MemberCard name="Jeremy"   rank="Member"  photoUrl="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fweknowyourdreams.com%2Fimages%2Fbanana%2Fbanana-02.jpg&f=1&nofb=1" />
      <MemberCard name="Scott"  rank="Member"  photoUrl="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fweknowyourdreams.com%2Fimages%2Fbanana%2Fbanana-02.jpg&f=1&nofb=1" />
      <MemberCard name="Adeyemi"  rank="Member"  photoUrl="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fweknowyourdreams.com%2Fimages%2Fbanana%2Fbanana-02.jpg&f=1&nofb=1" />
      <MemberCard name="Hannah"   rank="Member"  photoUrl="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fweknowyourdreams.com%2Fimages%2Fbanana%2Fbanana-02.jpg&f=1&nofb=1" />
      <MemberCard name="Oliver"   rank="Rookie"  photoUrl="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fweknowyourdreams.com%2Fimages%2Fbanana%2Fbanana-02.jpg&f=1&nofb=1" />
    </SimpleGrid>
  );
}

function MemberCard({ name, rank, photoUrl }: any) {
  let color: any;
  switch (rank) {
    case "Founder":
      color = "rgb(113, 54, 138)";
      break;
    case "Rookie":
      color = "rgb(31, 139, 76)";
      break;
    default:
      color = "rgb(52, 152, 219)";
  }

  return (
    <div>
      <Flex border="2px" borderColor={color} padding={4} borderRadius={10} w="120px">
        <Image src={photoUrl} boxSize="80px" alt={name + "'s profile picture"} />
        <Text textAlign="center" fontWeight="bold">{name}</Text>
        <Text textAlign="center">{rank}</Text>
      </Flex>
    </div>
  );
}