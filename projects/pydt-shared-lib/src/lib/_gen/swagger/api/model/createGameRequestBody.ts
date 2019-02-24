/**
 * serverless-api
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


export interface CreateGameRequestBody {
    gameSpeed: string;
    mapFile?: string;
    mapSize: string;
    gameType: string;
    displayName: string;
    description?: string;
    webhookUrl?: string;
    dlc: Array<string>;
    slots: number;
    humans: number;
    randomOnly?: boolean;
    allowJoinAfterStart?: boolean;
    turnTimerMinutes?: number;
    password?: string;
    player1Civ: string;
}
