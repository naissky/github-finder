"use client";

import { useState } from "react";
import { SearchBar } from "@/components/SearchBar";
import { UserProfile } from "@/components/UserProfile";
import { RepoList } from "@/components/RepoList";
import { fetchGitHubUser, fetchUserRepos } from "@/lib/github";
import { GitHubUser, GitHubRepo } from "@/lib/types";
import { Github } from "lucide-react";

export function Main() {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async (username: string) => {
    setLoading(true);
    setError("");

    try {
      const userData = await fetchGitHubUser(username);
      if (!userData) {
        setError("User not found");
        setUser(null);
        setRepos([]);
        return;
      }

      setUser(userData);
      const userRepos = await fetchUserRepos(username);
      setRepos(userRepos);
    } catch (err) {
      setError("An error occurred while fetching data");
      setUser(null);
      setRepos([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-zinc-950 py-12 px-4">
      <div className="w-full mx-auto ease-in-out duration-300">
        <div className="flex items-center justify-center gap-2 mb-8">
          <Github className="w-8 h-8 text-[#CDD5E0]" />
          <h1 className="text-3xl font-bold text-[#CDD5E0]">GitHub Profile Search</h1>
        </div>

        <SearchBar onSearch={handleSearch} />

        {loading && (
          <div className="mt-8 text-center">
            <div className="w-8 h-8 border-4 border-[#CDD5E0] border-t-transparent rounded-full animate-spin mx-auto"></div>
          </div>
        )}

        {error && (
          <div className="mt-8 text-destructive text-center">
            {error}
          </div>
        )}

        {user && !loading && (
          <>
            <div className="mt-8">
              <UserProfile user={user} />
            </div>
            <RepoList repos={repos} />
          </>
        )}
      </div>
    </div>
  )
}
