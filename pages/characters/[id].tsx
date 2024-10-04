import {HeadersApp} from "@/components/ui/headersApp/HeadersApp";
import {CharacterCard} from "@/components/ui/characterCard/CharacterCard";
import {useCharacter} from "@/assets/common/hooks/useCharacter";
import {getLayout} from "@/components/ui/layout/baseLayout/BaseLayout";

function Character() {

  const character = useCharacter()

  return (
    <>
      <HeadersApp title={'Character'}/>
      {character && <CharacterCard image={character.image} name={character.name} id={character.id}/>}
    </>
  );
}

Character.getLayout = getLayout
export default Character
