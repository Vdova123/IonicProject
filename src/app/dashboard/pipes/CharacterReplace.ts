export function replaceDiacritic(character: string): string {

    let result = character.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    return result;
}
