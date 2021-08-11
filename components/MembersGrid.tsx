import { Flex, Center, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { AppProps } from "next/dist/next-server/lib/router/router";
import React from "react";


export default function MemberGrid() {
    return (
        <SimpleGrid columns={5} spacing="10px">
            {/* That feeling when everyone is a banana */}
            <MemberCard name="Alex"     photoUrl="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fweknowyourdreams.com%2Fimages%2Fbanana%2Fbanana-02.jpg&f=1&nofb=1" rank="Founder" />
            <MemberCard name="Joey"     photoUrl="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fweknowyourdreams.com%2Fimages%2Fbanana%2Fbanana-02.jpg&f=1&nofb=1" rank="Member" />
            <MemberCard name="Eli"      photoUrl="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fweknowyourdreams.com%2Fimages%2Fbanana%2Fbanana-02.jpg&f=1&nofb=1" rank="Member" />
            <MemberCard name="Bernardo" photoUrl="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fweknowyourdreams.com%2Fimages%2Fbanana%2Fbanana-02.jpg&f=1&nofb=1" rank="Member" />
            <MemberCard name="Jeremy"   photoUrl="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fweknowyourdreams.com%2Fimages%2Fbanana%2Fbanana-02.jpg&f=1&nofb=1" rank="Member" />
            <MemberCard name="Scott"    photoUrl="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fweknowyourdreams.com%2Fimages%2Fbanana%2Fbanana-02.jpg&f=1&nofb=1" rank="Member" />
            <MemberCard name="Ademi"    photoUrl="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fweknowyourdreams.com%2Fimages%2Fbanana%2Fbanana-02.jpg&f=1&nofb=1" rank="Member" />
            <MemberCard name="Hannah"   photoUrl="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fweknowyourdreams.com%2Fimages%2Fbanana%2Fbanana-02.jpg&f=1&nofb=1" rank="Member" />
            <MemberCard name="Oliver"   photoUrl="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fweknowyourdreams.com%2Fimages%2Fbanana%2Fbanana-02.jpg&f=1&nofb=1" rank="Rookie" />
        </SimpleGrid>
    );
}

function MemberCard({ name, photoUrl, rank }: any) {
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