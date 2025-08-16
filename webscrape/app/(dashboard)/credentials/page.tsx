export const dynamic = "force-dynamic";

import CreateCredentialDialog from "@/app/(dashboard)/credentials/_components/create-credential-dialog";
import { GetCredentialsForUser } from "@/actions/credentials/get-credentials-for-user";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { LockKeyholeIcon, ShieldIcon, ShieldOffIcon } from "lucide-react";
import React, { Suspense } from "react";
import DeleteCredentialDialog from "./_components/delete-credential-dialog";

const CredentialsPage = () => {
  return (
    <div className="flex flex-1 flex-col h-full">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">Credentials</h1>
          <p className="text-muted-foreground">Manage your credentials</p>
        </div>
        <CreateCredentialDialog />
      </div>

      <div className="h-full py-6 space-y-8">
        <Alert className="flex justify-center mx-auto w-fit">
          <ShieldIcon className="h-4 w-4 stroke-primary" />
          <AlertTitle className="text-primary">Encrypted</AlertTitle>
          <AlertDescription>
            All information is secured with encryption. Your credentials are
            stored securely and can only be accessed by you.
          </AlertDescription>
        </Alert>
        <Suspense fallback={<Skeleton className="h-[300px] w-full" />}>
          {/* Simulating a component that fetches user credentials */}
          <UserCredentials />
        </Suspense>
      </div>
    </div>
  );
};

export default CredentialsPage;

const UserCredentials = async () => {
  const credentials = await GetCredentialsForUser();

  if (!credentials) {
    return <div className="text-muted-foreground">Something went wrong</div>;
  }

  if (credentials.length === 0) {
    return (
      <Card className="w-full p-4">
        <div className="flex flex-col items-center justify-center">
          <div className="rounded-full bg-accent w-20 h-20 flex items-center justify-center">
            <ShieldOffIcon size={40} className="stroke-primary" />
          </div>
          <div className="flex flex-col text-center gap-1">
            <p className="text-bold">No credentials created yet</p>
            <p className="text-sm text-muted-foreground">
              Click the button below to create your first credential
            </p>
          </div>
          <div className="mt-4">
            <CreateCredentialDialog triggerText="Create your first credential" />
          </div>
        </div>
      </Card>
    );
  }

  return (
    <div className="flex gap-2 flex-wrap">
      {credentials.map((credential) => {
        const createdAt = new Date(credential.createdAt).toLocaleDateString(
          "en-US",
          {
            year: "numeric",
            month: "short",
            day: "numeric",
          }
        );

        return (
          <Card key={credential.id} className="w-full p-4 flex justify-between">
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-primary/10 w-8 h-8 flex justify-center items-center">
                <LockKeyholeIcon size={18} className="stroke-primary" />
              </div>
              <div>
                <p className="font-bold">{credential.name}</p>
                <p className="text-muted-foreground text-xs">{createdAt}</p>
              </div>
            </div>
            
            <DeleteCredentialDialog
                name={credential.name}
            />
          </Card>
        );
      })}
    </div>
  );
};
