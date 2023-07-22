export class RoomDto {
  readonly description?: string; // Opcionalmente, podrías permitir que el usuario proporcione una descripción
  readonly userId: number; // El id_user del usuario que crea la sala
}