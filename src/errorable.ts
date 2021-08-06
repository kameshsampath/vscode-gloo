/* eslint-disable header/header */

//https://github.com/Azure/vscode-kubernetes-tools

/*-----------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See LICENSE file in the project root for license information.
 *-----------------------------------------------------------------------------------------------*/

export interface Succeeded<T> {
    readonly succeeded: true;
    readonly result: T;
}

export interface Failed {
    readonly succeeded: false;
    readonly error: string[];
}

export type Errorable<T> = Succeeded<T> | Failed;

export function succeeded<T>(e: Errorable<T>): e is Succeeded<T> {
  return e.succeeded;
}

export function failed<T>(e: Errorable<T>): e is Failed {
  return !e.succeeded;
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Errorable {
    export function succeeded<T>(e: Errorable<T>): e is Succeeded<T> {
      return e.succeeded;
    }

    export function failed<T>(e: Errorable<T>): e is Failed {
      return !e.succeeded;
    }
}
